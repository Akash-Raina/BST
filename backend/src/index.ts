import express from "express"
import cors from "cors"
import next from "./router"

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/v1', next)
app.listen(4000)