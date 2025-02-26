import { Request } from "express";
import formidable, { Fields, Files } from "formidable"
import xlsx from "xlsx"
import pool from "../models/dbConnection";
import { validAdmin } from "../middleware/auth";
import { RowDataPacket } from "mysql2";

async function getRankingFile(req: Request){

    const form = formidable({ multiples: true});

    form.parse(req, async (err: Error | null, fields: Fields, files: Files) =>{
        if (err) {
            console.log("Error parsing form:", err);
            throw new Error("Error parsing form data");
        }
        const uploadedFile = files.file;

        if (!uploadedFile) {
            throw new Error("No file uploaded");
        }
        const filesArray = Array.isArray(uploadedFile)
            ? uploadedFile
            : [uploadedFile];
        for (const uploadedFile of filesArray) {
            if (!uploadedFile.filepath) {
                throw new Error("File missing filepath");
            }
            const filePath = uploadedFile.filepath;
            const wb = xlsx.readFile(filePath);
            const sheet = wb.Sheets[wb.SheetNames[0]];
            const data = xlsx.utils.sheet_to_json(sheet);
            const rows: any[] = []; 

            for (let i = 1; i <= 64; i++) {
                const row = data[i] as Record<string, unknown>;
                const values = Object.values(row) ;
                rows.push(values);
            }
            const convertedRows = rows.map(row => 
                row.map((value:any, index:any) => 
                  typeof value === "number" && index > 1 ? Math.round(value) : value
                )
            )
            const query = `
                INSERT INTO rankingtable (
                    \`RNK\`, TEAMS, JAN, FEB, MAR, APR, MAY, JUNE, JULY, AUG, SEP, OCT, NOV, DECM, TOTAL
                ) VALUES ?
            `;
            await pool.query(query, [convertedRows]);

        }
    });

}

async function createEvent(req: Request){

    if(!req.body) throw new Error;

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    
    const adminId = await validAdmin(token);
    console.log('adminId', adminId);
    const {event_name, status, prize_pool, date, location, description} = req.body;
    try{
        await pool.query(
            `INSERT INTO events (name, date, location, description, status, prize_pool, created_by)
                VALUES
                (?, ?, ?, ?, ?, ?, ?)`,
            [event_name, date, location, description, status, prize_pool, adminId]
        );
    }
    catch(err){
        throw new Error("Error came while inserting in DB")
    }
}

async function getAllEvents(req: Request){
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    
    await validAdmin(token);

    const allEvents = await pool.query(
        `SELECT id, name, date, location, status, prize_pool, logo FROM events`
    )

    return allEvents[0];
}

async function updateEvent(req: Request){
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    
    await validAdmin(token);

    const {id} = req.body 
}

async function createTeam(req: Request) {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    
    await validAdmin(token);

    const { team_name, coach, manager, organization, players } = req.body;

    if (!team_name) throw new Error("Team name is required");
    if (!Array.isArray(players) || players.length === 0) throw new Error("At least one player is required");

    const connection = await pool.getConnection();
    console.log("Connected to DB");

    try {
        await connection.beginTransaction();

        const [teamResult]: any = await connection.execute<RowDataPacket[]>(
            `INSERT INTO teams (team_name, coach, manager, organization) VALUES (?, ?, ?, ?)`,
            [team_name, coach || null, manager || null, organization || null]
        );
        const team_id = teamResult.insertId;

        const playerValues = players.map(({ player_name, in_game_name, role, country }) => {
            if (!player_name || !in_game_name || !role || !country) {
                throw new Error("All player fields are required");
            }
            return [team_id, player_name, in_game_name, role, country];
        });

        await connection.query(
            `INSERT INTO players (team_id, player_name, in_game_name, role, country) VALUES ?`,
            [playerValues]
        );

        await connection.commit();
    } catch (dbError) {
        await connection.rollback();
        console.error("Database Error:", dbError);
        throw dbError;
    } finally {
        connection.release();
    }
}


export {
    getRankingFile,
    createEvent, 
    getAllEvents,
    updateEvent,
    createTeam,
    };
