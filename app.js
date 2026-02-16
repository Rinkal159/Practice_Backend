import express from "express";
import dotenv from "dotenv";
import generalRouter from "./routers/general.js";

const app = express();
dotenv.config();
app.use(express.json());

app.get(/^\/.$/, (req, res) => {
    res.send("My response");
});

app.use("/", generalRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server success");

})