import express from "express"
import { createEventApi, rankingFile } from "../controller/admin.controller";

const router = express.Router();

router.post('/uploadranking', rankingFile);
router.post('/createevent', createEventApi);

export default router;