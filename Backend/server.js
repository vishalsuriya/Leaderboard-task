const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("../Backend/Database/Connection");
const userRoutes = require('../Backend/Routes/UserRoutes');
const historyRoutes = require('../Backend/Routes/HistoryRoutes')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
connectDB();
app.use('/api/users',userRoutes)
app.use('/api/history',historyRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})