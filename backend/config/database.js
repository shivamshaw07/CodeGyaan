import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";
configDotenv()

 const dbconnect = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("dbConnected successfully"))
    .catch((error) => {console.log("Db not connnected"), console.log(error)});
};

export default dbconnect
