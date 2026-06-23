import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/userRoute.js';
import jobRouter from './routes/jobRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//api endpoints
app.use('/api/user',adminRouter);
app.use('/api/job',jobRouter);


app.get('/', (req, res) => {
    res.status(200).send('API Working!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
