import {signupWithEmail, logininWithEmail, getTeams} from "../services/user.service";
import { Request, Response } from "express";

async function createUser(req: Request, res: Response){

    try{
        await signupWithEmail(req);
        res.status(201).json({
            message: "User Created Successfully"
        })
    }
    catch(error:unknown){
        if(error instanceof Error)
            res.status(500).json({
                msg: "Error came While creating User",
                error: error.message
            })
    }

}

async function checkUser(req: Request, res: Response){

    try{
        const token = await logininWithEmail(req);
        res.status(200).json({
            message: "login successfull",
            token
        })
    }
    catch(err:unknown){
        if(err instanceof Error)
            res.status(500).json({
                error: err.message
            })
    }
}

async function getTeamsRank(req: Request, res: Response){
    try{
        const {rankingData, size, index} = await getTeams(req);
        res.status(200).json({
            rankingData,
            pageSize: size,
            pageIndex: index
        })
    }
    catch(err:unknown){
        if(err instanceof Error)
        res.status(500).json({
            error: err.message
        })
    }
}

export {
    createUser,
    checkUser,
    getTeamsRank
};