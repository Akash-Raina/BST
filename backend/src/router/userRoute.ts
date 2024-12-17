import express from "express"
import {createUser,checkUser} from "../controller/user.controller";


const router = express.Router();

router.post('/signup', createUser);
router.post('/login', checkUser);

export default router;