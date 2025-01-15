import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt"

dotenv.config();

export const loginUser = async (password: string, user:any) => {
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error("wrong password");

    const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token ;
};
export const validAdmin = async (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        const adminId = decoded.userId;
        return adminId;
    }
    catch (error) {
        throw new Error
    }
};