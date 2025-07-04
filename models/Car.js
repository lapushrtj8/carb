const mongoose=require('mongoose');
const carSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:
    {
        type:String,
        required:true
    },
    price:
    {
        type:String,
        required:true
    },
    seats:{
        type:Number,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    image:
    {
        type:String
    },
    imageAlt:{
        type:String
    }

});
const Car=mongoose.model('Car',carSchema);
module.exports=Car;