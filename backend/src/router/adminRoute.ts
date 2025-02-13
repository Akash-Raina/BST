import express from "express"
import { createEventApi, createTeamApi, rankingFile } from "../controller/admin.controller";

const router = express.Router();

router.post('/uploadranking', rankingFile);
router.post('/createevent', createEventApi);
router.post('/createteam', createTeamApi);

export default router;