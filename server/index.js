import express from "express";
import bodyParser from "body-parser";
import route1 from "./travelPlan/route.js";
import Connection from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/travelPlan", route1);



Connection();
app.listen(process.env.PORT, () => console.log(`your app is running on port ${process.env.PORT}`));
