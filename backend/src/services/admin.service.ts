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

async function createTeam(req: Request){

    const form = formidable({ multiples: true});

    form.parse(req, async (err: Error | null, fields: Fields, files: Files) =>{
        if (err) {
            console.log("Error parsing form:", err);
            throw new Error("Error parsing form data");
        }

        const { team_name, coach, manager, organization } = fields;

        console.log("team_name : ", typeof(team_name), "->", team_name)
        
        if (!team_name) {
            throw new Error("Team name is really required" );
        }

        const connection= await pool.getConnection();

        try{
            await connection.beginTransaction();

            const [teamResult]:any = await connection.execute<RowDataPacket[]>(
                `INSERT INTO teams (team_name, coach, manager, organization) VALUES (?, ?, ?, ?)`,
                    [team_name, coach || null, manager || null, organization || null]
            );
            console.log("teamResult", teamResult.insertId);
            const team_id = teamResult.insertId;
            console.log("players", typeof(fields.players))
            if(typeof fields.players === 'string'){
                console.log("isString");
                const players = JSON.parse(fields.players);

                if (!Array.isArray(players) || players.length === 0) {
                    throw new Error("At least one player is required" );
                }

                for (const player of players) {
                    const { player_name, in_game_name, role, country} = player;

                    await connection.execute(
                        `INSERT INTO players (team_id, player_name, role, country, email) VALUES (?, ?, ?, ?, ?)`,
                        [team_id, player_name, in_game_name, role, country]
                    );
                }

                // if (files.player_images) {
                //     const images = Array.isArray(files.player_images) ? files.player_images : [files.player_images];

                //     for (const imageFile of images) {
                //         const imageUrl = await uploadToS3(imageFile.filepath); // Upload and get URL

                //         await connection.execute(
                //             `UPDATE players SET profile_image_url = ? WHERE team_id = ? AND player_name = ?`,
                //             [imageUrl, team_id, imageFile.originalFilename?.split(".")[0] || "unknown"]
                //         );
                //     }
                // }

                await connection.commit(); 
            }
            else{
               throw new Error("Invalid players data format" );
            }


        }catch (dbError) {
            if (connection) await connection.rollback();
            console.error("Database Error:", dbError);
            throw new Error ("Database error");
        } finally {
            if (connection) connection.release();
        }
    });
    
} 

export {
    getRankingFile,
    createEvent, 
    createTeam,
    };
