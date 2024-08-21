const express=require('express');
require('dotenv').config();
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')
// database connection  
mongoose.connect(process.env.MONGO_URL).then(()=>{
//to listen to a port number 
app.listen(process.env.PORT,()=>{
    console.log('connected to database and listening on the port 4000!')
})   
}).catch((error)=>{
    console.log(error)
})
require('dotenv').config()
//create the express app

const app=express()
app.use(express.json());
//nodemon is to dynamically update the server
app.use(express.json())
app.use('/api/workouts',workoutRoutes)
//middleware
app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})


//we can change the dev in package.json



process.env