import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ExerciseService from '../../services/ExerciseService'
import UserItemTopicExercise from '../../components/UserComponents/UserItemTopicExercise';
import ResultService from '../../services/ResultService';

function UserTopicExercisePage() {
    const [exercises,setExercises] = useState([])
    const [results,setResults] = useState([])
    const userCurrent = useSelector((state) => state.itemUserLogin)

    console.log('Exercises: ',exercises)
    useEffect(()=>{
        ExerciseService.getAllExercise().then(res=>setExercises(res.data))
        ResultService.getResultByUserId(userCurrent.id).then(res=> setResults(res.data))
    
    },[])

    return(
        <div>
           {exercises.map(x=> {
               let status =0;
               results.forEach(y => {
                   if (y.exerciseId === x.id) {
                       status = 1 ;    
                   }
               })
            return <UserItemTopicExercise id={x.id} img={x.image} name={x.name} status={status}/>
           })
}         </div>
    )
}

export default UserTopicExercisePage;