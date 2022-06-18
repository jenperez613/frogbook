import 'dotenv/config'
import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from "dotenv";
import userRoutes from './routes/user.js'
import mongoose from "mongoose";

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/users', userRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(PORT,  () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))


