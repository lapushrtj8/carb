const express = require('express');
const router = express.Router();
const {addCar,getAllCars,deleteCar,updateCar} = require('../controllers/carController');

// Routes for admin and user
router.get('/', getAllCars); // Everyone can view cars
router.post('/', addCar); // Admin: add a car
router.delete('/:id', deleteCar); // Admin: delete a car
router.put('/:id', updateCar); // Admin: update car (optional)

module.exports = router;



