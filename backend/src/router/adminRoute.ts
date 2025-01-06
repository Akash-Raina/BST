import express from "express"
import { rankingFile } from "../controller/admin.controller";

const router = express.Router();

router.post('/uploadranking', rankingFile);

export default router;