import { Request } from "express";
import pool from "../models/dbConnection";
import bcrypt from "bcrypt";
import { hashPassword } from "../utils/hashPassword";
import { RowDataPacket } from "mysql2";
import { loginUser } from "../middleware/auth";

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
        SELECT password FROM user WHERE email = ?
    `, [email])

    if(user[0] == undefined) throw new Error("Wrong Email")
    const token = loginUser(email, simplePassword, user[0])
    return token;
}

export {
    signupWithEmail,
    logininWithEmail
};