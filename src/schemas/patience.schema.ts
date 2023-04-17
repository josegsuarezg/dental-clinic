import { Schema } from "mongoose";

export const PatienceSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: {type: Number, required: true},
  patology: String,
  createdAt: {type: Date, default: Date.now}
});

