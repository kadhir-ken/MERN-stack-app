import {useState} from 'react'
import { useWorkoutContext } from '../context/useWorkoutsContext';
const WorkOutForm=()=>{
    const {dispatch}=useWorkoutContext();
    const [Title,setTitle]=useState('');
    const [Reps,setReps]=useState('');
    const [Load,setLoad]=useState('');
const[error,setError]=useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const workout ={title:Title,reps:Reps,load:Load}
        const response =await fetch('/api/workouts/',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
const json = await response.json()
if(!response.ok){
setError(json.error)
}

if(response.ok){
    setTitle('');
    setReps('');
    setLoad('')
    setError(null);
    console.log('your data is added',json);
    dispatch({type:'CREATE_WORKOUT',payload:json})
}
    }
    return(
    <form  className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label htmlFor="">Exercise Title:</label>
        <input 
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={Title}/>

<label htmlFor="">Reps :</label>
        <input 
        type="number"
        onChange={(e)=>setReps(e.target.value)}
        value={Reps}/>

<label htmlFor="">Load (kg):</label>
        <input 
        type="text"
        onChange={(e)=>setLoad(e.target.value)}
        value={Load}/>
        <button >Add</button>
{error && <div className="error">{error}</div>}
    </form>
    )
}




export default WorkOutForm