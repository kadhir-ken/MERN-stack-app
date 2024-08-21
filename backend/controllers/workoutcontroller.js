const { default: mongoose } = require('mongoose');
const Workout=require('../models/WorkoutModels')



//get all workouts

const getworkouts = async(req,res)=>{
    const workouts=await Workout.find().sort({createdAt:-1});
    res.status(200).json(workouts)
}


//get a single workout
const getworkout =async (req,res)=>{
    const { id }=req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'not a valid id'})
}
     const workout=await Workout.findById(id);
     if(!workout){
        return res.status(400).json({
            error:'no workout available for that id'
        })
     }
     res.status(200).json(workout)
}



// create a new workout
const createworkout= async (req,res)=>{
    const {title,reps,load}=req.body
    try{
 const workouts=await Workout.create({title,reps,load})
   res.status(200).json(workouts) 
 
   return;}
    catch(error){
  res.status(404).json({error:error.message})
  return; 
 }
  return  res.json({mssg:"POST a workout"})
}


//delete a workout

const deleteaworkout = async (req,res)=>{
    const {id }=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'not a valid id'})
    }
const workouts= await Workout.findOneAndDelete({_id:id})

if (!workouts){
    res.status(404).json({error:'no workout found'})

}
res.status(200).json(workouts)

} 


//update a workout
const updateworkout = async (req,res)=>{
    const {id }=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'not a valid id'})
    }
    const workouts=await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if (!workouts){
        res.status(404).json({error:'no workout found'})
    }
res.status(200).json(workouts)

}




module.exports ={
    createworkout,
    getworkouts,
    getworkout,
    deleteaworkout,
    updateworkout
}