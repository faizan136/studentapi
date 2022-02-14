const mongoose= require("mongoose");
const validator = require("validator");
 const studentSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
        minlength:3
     },
         email:{
             type:String,
             required:true,
             unique:[true,"Email id already present"],
             validate(value){
             if(!validator.isEmail(value)){
                throw new error("invalid Email") 
             }
             }
         },
         mobile:
         {
             type:Number,
             required:true,
             minlength:10,
             unique:true
         },
         adress:
         {
             type:String,
             required:true
         }
     
 })
 const Student = new mongoose.model('Student',studentSchema)
 module.exports =Student