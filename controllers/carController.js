const Car = require('../models/Car'); // assuming Car is your model

// Add car (admin only)
const addCar = async (req, res) => {
try {
const car = new Car(req.body);
await car.save();
res.status(201).json({ message: "Car added successfully", car });
} catch (err) {
console.error("error addng car",err);
console.log(req.body);
res.status(400).json({ message: "Car addition failed" });
}
};

// Get all cars
const getAllCars = async (req, res) => {
try {
const cars = await Car.find();
res.status(200).json(cars);
} catch (err) {
res.status(400).json({ message: "Fetching cars failed" });
}
};

// Delete car by ID (admin only)
const deleteCar = async (req, res) => {
const id = req.params.id;
try {
const dc=await Car.findByIdAndDelete(id);
res.status(200).json({ message: "Car deleted successfully" });
} catch (err) {
    console.error("issue",err);
res.status(400).json({ message: "Car deletion failed" });
}
};

const updateCar = async (req, res) => {
const id = req.params.id;
try {
const updated = await Car.findByIdAndUpdate(id, {$set:req.body}, { new: true });
res.status(200).json({ message: "Car updated", car:updated });
} catch (err) {
res.status(400).json({ message: "Update failed" });
}
};


module.exports = {
addCar,
getAllCars,
deleteCar,
updateCar
};