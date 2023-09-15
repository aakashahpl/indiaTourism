import mongoose from 'mongoose';

// Define the schema for the "state" collection
const stateSchema = new mongoose.Schema({
  name: String, // Replace with your actual schema fields
  pictures: [String],
  // Add other fields as needed
});

// Create the "state" model
const State = mongoose.model('State', stateSchema);

export default State;
