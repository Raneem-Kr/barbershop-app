const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);
app.get('/', (req , res ) => {
    res.send('Barber API Running');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

const PORT = process.envPORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});