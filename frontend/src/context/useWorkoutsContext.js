import { WorkOutContext } from "./WorkOutContext";
import { useContext } from "react";

export const useWorkoutContext=()=>{
      const context =useContext(WorkOutContext)
    
      if(!context){
        throw Error('useWorkoutContext only be used in contextprovider')
      }
 



    return context
}
