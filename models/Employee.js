const mongoose=require('mongoose');

const EmployeeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number
    },
    city:{
        type:String
    }
});

module.exports=mongoose.model('Employee',EmployeeSchema);