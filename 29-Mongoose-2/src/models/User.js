import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true});

userSchema.set('toJSON', function(doc){
  const { __v, _id, password, ...object } = doc;
  object.id = _id;
  return object;
})

export default model('User', userSchema);
