import { Request } from "express";
import pool from "../models/dbConnection";
import { hashPassword } from "../utils/hashPassword";
import { RowDataPacket } from "mysql2";
import { loginUser } from "../middleware/auth";
import { pagination } from "../utils/pagination";

async function signupWithEmail(req: Request){

    if(!req.body || !req.body.password) throw new Error;

    const {username, email, password} = req.body;

    const hashedPassword = await hashPassword(password)

    await pool.query(`
        INSERT INTO user (username, email, password, created_date) 
        VALUES (?, ?, ?, NOW())
    `, [username, email, hashedPassword]);
}

async function logininWithEmail(req: Request){
    if(!req.body.email || !req.body.password) throw new Error;

    const email = req.body.email;
    const simplePassword = req.body.password;
    const [user] = await pool.query<RowDataPacket[]>(`
        SELECT password, id FROM user WHERE email = ?
    `, [email])

    if(user[0] == undefined) throw new Error("Wrong Email")
    const token = loginUser(simplePassword, user[0])
    return token;
}

async function getTeams(req: Request){

    let index = parseInt(req.query.pageIndex as string) || 1;
    let size = parseInt(req.query.pageSize as string) || 16;

    index = index > 0 ? index : 1;
    size = size > 0 ? size : 16;  


    const { limit, offset } = pagination(
        index,
        size
    );

    let sqlQuery = `SELECT RNK, TEAMS, TOTAL FROM rankingtable `;

    const sqlParams: (string | number)[] = [];
  
    sqlQuery += "LIMIT ? OFFSET ?";
    sqlParams.push(limit, offset);

    const [rankingData] = await pool.query<RowDataPacket[]>(sqlQuery, sqlParams);
    return {rankingData, size, index};
}


export {
    signupWithEmail,
    logininWithEmail,
    getTeams
};