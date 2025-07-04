const express=require('express');
const mongoose=require('mongoose');
const carRoutes=require('./routes/carRoutes');
const userRoutes=require('./routes/userRoutes');
const authRoutes=require('./routes/authRoutes');
const app = express();
app.use(express.json())
const cors=require("cors")

const PORT = 8010;
const MONGODB_URL = "mongodb+srv://rosetreesajos:kLSCT3EwSobXOnmC@todo.ssv0l89.mongodb.net/?retryWrites=true&w=majority&appName=todo"

mongoose
    .connect(MONGODB_URL)
    .then(() =>console.log("Database connected succesfully"))
    .catch((err) => console.log("Error: ", err));
 const User = require('./models/User'); // adjust path as needed
   
app.use(cors())
app.listen(PORT, () => { console.log("Server runing succesfuly"); });
app.use('/api/cars',require('./routes/carRoutes'));
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
