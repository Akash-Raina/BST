import express from "express"
import { createEventApi, createTeamApi, getAllEventsApi, rankingFile, updateEventApi } from "../controller/admin.controller";

const router = express.Router();

router.post('/uploadranking', rankingFile);
router.post('/createevent', createEventApi);
router.get('/allevents', getAllEventsApi);
router.post('/updateevent', updateEventApi)
router.post('/createteam', createTeamApi);
router.post('/createstage', createEventApi);

export default router;