import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ExerciseService from '../../services/ExerciseService'
import UserItemTopicExercise from '../../components/UserComponents/UserItemTopicExercise';
function UserTopicExercisePage() {
    const [exercises,setExercises] = useState([])

    console.log('Exercises: ',exercises)
    useEffect(()=>{
        ExerciseService.getAllExercise().then(res=>setExercises(res.data))
    },[])

    return(
        <div>
           {exercises.map(x=> <UserItemTopicExercise id={x.id} img={x.image} name={x.name}/>)
}         </div>
    )
}

export default UserTopicExercisePage;