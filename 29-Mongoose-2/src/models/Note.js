import mongoose from "mongoose";

const { Schema } = mongoose;

const animalSubSchema = new Schema({
  data: Schema.Types.Mixed,
}, { _id: false });

const AnimalSchema = new Schema({
  name: String,
  color: String,
  legs: Number,
  hastail: Boolean,
  age: Number,
  data: animalSubSchema,
  data2: {
    data: Schema.Types.Mixed,
  }
}, { timestamps: { createdAt: 'create_at', updatedAt: false} });

const model = mongoose.model('Animal', AnimalSchema);

export default model;
