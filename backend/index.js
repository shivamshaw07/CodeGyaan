import express from 'express'
import dbconnect from './config/database.js'
import { config as configDotenv } from 'dotenv';
import authRoute from './routes/auth.js';
configDotenv()

const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use('/auth',authRoute);

app.use('/',(req,res)=>{
    res.send("server is running")
})
app.listen(port,()=>{
    console.log("server is running at port ",port);
    dbconnect();
})