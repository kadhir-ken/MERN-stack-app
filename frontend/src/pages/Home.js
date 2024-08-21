import { useEffect } from 'react';
import { useWorkoutContext } from '../context/useWorkoutsContext';
import WorkOutDetails from '../components/WorkOutDetails'
import WorkOutForm from '../components/workoutform';
const Home=()=>{
const {workouts,dispatch}=useWorkoutContext()
useEffect(()=>{
   const fetchworkouts =async ()=>{
const response =await fetch('/api/workouts')
const json =await response.json();
if(response.ok){
  dispatch({type:'SET_WORKOUTS',payload:json})  
}   
}


   fetchworkouts()
},[])

    return(
        <div className="home">
           <div className="workouts">
            {workouts && workouts.map((workout)=>(
<WorkOutDetails key={workout._id} workout={workout}/>
            ))}
           </div>
           <WorkOutForm />
        </div>
    )
}  
export default Home