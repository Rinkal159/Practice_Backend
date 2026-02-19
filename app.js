//* MyNotes Backend

import express from "express";
import dotenv from "dotenv";
import connect from "./config/database.js";
import cookieParser from "cookie-parser";

import authRouter from "./routers/authRouter.js";
import coreRouter from "./routers/coreRouter.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", coreRouter);

const port = process.env.PORT;

connect()
    .then(() => {
        console.log("database success");
        app.listen(port, () => {
            console.log("server success");

        })
    })
    .catch((err) => {
        console.log(err);
    })
