import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import connectDb from './utils/db.js';
import userRoutes from './routes/userRoute.js';
const app= express();

const port = process.env.PORT||3030;
app.use(express.json());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}));

connectDb()
app.listen(port,()=>{
    console.log('app is running on port 3030');
});
//routes
app.use('/shopkie',userRoutes)