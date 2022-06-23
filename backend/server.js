import 'dotenv/config'
import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import * as fs from "fs";
import fileUpload from "express-fileupload"

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use( fileUpload({
    useTempFiles: true,
}))


//routes
fs.readdirSync('./routes').map(async(r) => {
    let route = await import("./routes/" + r)
    app.set("/", route.default)
})
//if export w/out default, use ("/", route.router)

const PORT = process.env.PORT || 5000


//database
mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(process.env.PORT,  () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))



