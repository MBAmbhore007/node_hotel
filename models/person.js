const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['Chief','Manager','Waiter','Housekeeping']
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number
    }
});
// created an schema above
//now,creating model, from the above schema
const person=mongoose.model('person',personSchema);

module.exports= person;