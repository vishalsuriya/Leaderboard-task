const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("../Backend/Database/Connection");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})