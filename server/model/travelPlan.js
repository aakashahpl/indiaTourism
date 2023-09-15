import mongoose from "mongoose";

const travelPlanSchema = mongoose.Schema({
  destination: {
    type: String,
    required: true,
    minLength: 1,
  },

  startDate:{
    type: String,
    required: true,

  },
  endDate:{
    type:String,
    required:true
  },
  interests: {
    type: [String],
    required: true,
    minLength: 2,
  },
  visa: {
    type: String,
    required: true,
    minLength: 2,
  },
  flight:{
    type: String,
    required: true,
    minLength: 1,
  },
  fname:{
    type: String,
    required: true,
    minLength: 2,
  },
  lname:{
    type: [String],
    required: true,
    minLength: 2,
  },
  email:{
    type: String,
    required:true,
  }
});


const travelPlanModel = mongoose.model("travelPlan",travelPlanSchema);

export default travelPlanModel;