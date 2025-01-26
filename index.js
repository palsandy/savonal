import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(bodyParser.json())

app.listen(3000, ()=> console.log('Server up and running...'));