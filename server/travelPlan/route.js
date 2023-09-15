import express from "express";
import travelPlan from "../model/travelPlan.js";
import State from "../model/state.js";
import mongoose from 'mongoose'; // Import Mongoose

import bodyParser from "body-parser";
const route1 = express.Router();
route1.use(bodyParser.json({extended:true}));
route1.use(bodyParser.urlencoded({ extended: true }));


route1.post("/create", async (req, res) => {
    try {
        const newTravelPlan = req.body;
        console.log(req.body);

        const addTravelPlan = new travelPlan(newTravelPlan);
        await addTravelPlan.save();

        const stateName = newTravelPlan.destination;

        
        const stateDocument = await State.findOne({ name: stateName });

        if (!stateDocument) {
            return res.status(404).json({ success: false, message: "State not found" });
        }

        const images = stateDocument.pictures;
        console.log(images);

        return res
            .status(200)
            .json({ success: true, message: "TravelPlan is created successfully", images });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

export default route1;



