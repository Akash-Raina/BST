import express from "express"
import { createEventApi, createEventTeamsApi, createTeamApi, eventQualifiedTeamsApi, getAllEventsApi, rankingFile, updateEventApi } from "../controller/admin.controller";

const router = express.Router();

router.post('/uploadranking', rankingFile);
router.post('/createevent', createEventApi);
router.get('/allevents', getAllEventsApi);
router.post('/updateevent', updateEventApi)
router.post('/createteam', createTeamApi);
router.post('/createstage', createEventApi);
router.post('/createeventteams', createEventTeamsApi);
router.post('/qualifiedteams', eventQualifiedTeamsApi);

export default router;