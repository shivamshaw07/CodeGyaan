import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";

export const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("dbConnected successfully"))
    .catch((error) => {console.log("Db not connnected"), console.log(error)});
};
