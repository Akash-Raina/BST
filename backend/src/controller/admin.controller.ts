import { Request, Response } from "express";
import { createEvent, createTeam, getAllEvents, getRankingFile, updateEvent } from "../services/admin.service";

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
        console.log('req', req.body);
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

async function getAllEventsApi(req: Request, res: Response){
    try{
        const eventCard = await getAllEvents(req);
        res.status(200).json({
            eventCard,
            msg: 'Event Card fetched successfully'
        })
    }
    catch(error: unknown){
        if(error instanceof Error){
            res.status(500).json({
                msg: error.message
            })
        }
    }
}

async function updateEventApi(req: Request, res: Response){
    try{
        await updateEvent(req);
        res.status(201).json({
            msg: "Event Updated Successfully"
        })
    }
    catch(error: unknown){

        if(error instanceof Error)
            res.status(500).json({
                msg: error.message
            })
    }
}

async function createTeamApi(req: Request, res: Response){
    try{
        await createTeam(req);
        res.status(201).json({
            msg: "Team Created Successfully"
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
    createEventApi,
    getAllEventsApi,
    updateEventApi,
    createTeamApi
};