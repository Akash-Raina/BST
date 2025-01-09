import express from "express"
import {createUser,checkUser, getTeamsRank} from "../controller/user.controller";


const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', checkUser);
router.get('/teamranking', getTeamsRank)

export default router;