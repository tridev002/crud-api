const express= require('express');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes=require('./routes/employeeRoutes');

const app=express();
dotEnv.config();
app.use(bodyParser.json())
const PORT = process.env.PORT || 3030;

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Database');
    }
    catch(error){
        console.error(error);
    }
}

connectDB();
//routes
app.use('/employess',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`Server is started running on 
        https://localhost:${PORT}`);
});

