import { Request, Response } from "express";
import { getRankingFile } from "../services/admin.service";

async function rankingFile(req: Request, res: Response){

    await getRankingFile(req);

    res.status(200).json({
        msg: 'File Uploaded Successfully'
    })
}

export {rankingFile};