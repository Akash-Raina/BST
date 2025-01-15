import { Request, Response } from "express";
import { createEvent, getRankingFile } from "../services/admin.service";

async function rankingFile(req: Request, res: Response){

    try{
        await getRankingFile(req);

        res.status(200).json({
            msg: 'File Uploaded Successfully'
        })
    }catch(err:unknown){
        if(err instanceof Error){
            res.status(500).json({
                msg: err.message
            })
        }

    }
}

async function createEventApi(req: Request, res: Response){

    try{
        await createEvent(req);
        res.status(200).json({
            msg: 'Event Created successfully'
        })
    }
    catch(err: unknown){
        if(err instanceof Error)
        res.status(500).json({
            msg: err.message
        })
    }
}

export {
    rankingFile, 
    createEventApi
};