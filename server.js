const express=require('express');
const mongoose=require('mongoose');
//const {default: mongoose } = require("mongoose");
const carRoutes=require('./routes/carRoutes');
//import carRoutes from './routes/carRoutes.js';
const app = express();
app.use(express.json())
const cors=require("cors")

const PORT = 8010;
const MONGODB_URL = "mongodb+srv://rosetreesajos:kLSCT3EwSobXOnmC@todo.ssv0l89.mongodb.net/?retryWrites=true&w=majority&appName=todo"

mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Database connected succesfully"))
    .catch((err) => console.log("Error: ", err));
    
app.use(cors())
app.listen(PORT, () => { console.log("Server runing succesfuly"); });
//app.post("/ping", ping); //post needs body ,pass objects in the body
app.use('/api/cars',require('./routes/carRoutes'));
//app.get("/", getTask)
//app.delete("/:id",deleteTask)//takes id from the url 