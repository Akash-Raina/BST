import express from "express"
import userRoute from "./userRoute"
import adminRoute from "./adminRoute"

const router = express.Router();

router.use('/user', userRoute);
router.use('/admin', adminRoute)


export default router