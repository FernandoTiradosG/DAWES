import mongoose from "mongoose";
import logger from "../utils/logger.js";

export default async function (config) {
  const url = `mongodb://${config.host}:${config.port}/${config.dbname}`;
  try {
    await mongoose.connect(url);
    logger.info(`Connected to MongoDB at ${url}`);
  }catch(error){
    console.log(error);
  }
}
