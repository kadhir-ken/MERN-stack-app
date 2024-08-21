const express =require('express')
const router=express.Router()
const {
    deleteaworkout,
    updateworkout,
    createworkout,
    getworkout,
    getworkouts
}=require('../controllers/workoutcontroller')

//get all workouts
router.get('/',getworkouts)


//get a single workout
router.get('/:id',getworkout)


//post a request
router.post('/',createworkout)


//delete a workout
router.delete('/:id',deleteaworkout)

 //update a request
router.patch('/:id',updateworkout)

module.exports=router