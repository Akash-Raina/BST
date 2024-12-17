import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt"

dotenv.config();

export const loginUser = async (email: string, password: string, user:any) => {
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error("wrong password");

    const token = jwt.sign({ userEmail: email}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token ;
};