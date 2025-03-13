const Employee= require('../models/Employee')

const createEmployee= async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body
        const employee= new Employee({
            name,email,phone,city
        });
        await employee.save()
        res.status(201).json(employee)
    } catch (error) {
        console.log("there is an error:",error)
        res.status(500).json({message:'server error'})
    }
}

const getEmployess = async(req,res)=>{
    try{
        const employess = await Employee.find()
        res.status(201).json(employess)
    }catch(error){
        res.status(404).json({message:error})
    }
}

const singleEmployee = async(req,res) =>{
    try{
        const employee = await Employee.findById(req.params.id)
        res.status(200).json(employee)
    }catch(err){
        res.status(500).json({message : err})
    }
}

const updateEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id, {name,email,phone,city}
        )
        res.status(200).json(myEmployee)
    }catch(err){
        res.status(500).json({message:err})
    }
}

const deleteEmployee = async(req,res) =>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.status(201).send()
        //res.json({message : "employee deleted"})
    }catch(error){
        res.status(404).json({message: `Employee Not Found ${error}`})
    }
}
module.exports={createEmployee,getEmployess,singleEmployee,updateEmployee,deleteEmployee}