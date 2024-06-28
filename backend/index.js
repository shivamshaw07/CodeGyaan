import express from 'express';
import dbconnect from './config/database.js';
import { config as configDotenv } from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/userRoute.js';
import instructorRoute from './routes/instructor.js';
import { cloudinaryset } from './config/cloudinary.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import studentRoute from './routes/student.js';

configDotenv();
cloudinaryset();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors(
    {
        origin:["http://localhost:5173","http://127.0.0.1:5173"],
        methods:["POST","GET","PUT","DELETE"],
        credentials:true
    }
))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/instructor', instructorRoute);
app.use('/student', studentRoute);

app.use('/', (req, res) => {
    res.send("server is running");
});

app.listen(port, () => {
    console.log("server is running at port", port);
    dbconnect();
});
