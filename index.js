import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import connectDB from '../project_Ecommerce/src/config/mongos.js';
import connectDB from '../project_Ecommerce/src/config/mongos.js'
import router from '../project_Ecommerce/src/routes/index.js'
// import crypto from 'crypto';


dotenv.config();

const app = express()
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:3001",
    })
);

app.use("/api", router);

async function connect () {
    try{
        app.listen(8000, () => {
            connectDB(process.env.MONGODB_PASSWORD);
            console.log("server is running on 8000")
        });
    }catch (err) {
        console.log("server is not connected")
    }
}
connect();

// const secretkey = crypto.randomBytes(32).toString("hex");
// console.log(secretkey)