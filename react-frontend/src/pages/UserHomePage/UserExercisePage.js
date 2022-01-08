import Start from '../../components/UserExercise/Start'
import Question from '../../components/UserExercise/Question'
import Questions from '../../components/UserExercise/Questions';
import End from '../../components/UserExercise/End'
import { useState } from 'react';
// import quizData from '../../data/quiz.json'
import { useEffect } from 'react/cjs/react.development';
import Modal from '../../components/UserExercise/Model';
import './css/UserExercise.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import {authHeader} from '../../services/auth-header';
import ResultService from '../../services/ResultService'
import ResultDetailService from '../../services/ResultDetailService'
const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}
let listAnswer=[];
let newListAnswer=[];
let interval;
let quizData = {
    data: []
};
function UserExercisePage() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [time, setTime] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const userCurrent = useSelector((state) => state.itemUserLogin)
  console.log('UserCurrent: ',userCurrent)

  useEffect(() => {

    axios.get('http://localhost:8080/api/question/findQuestionByExerciseId/3',{
        headers: {...headers, ...authHeader()},
    })
    .then(res => {
        quizData.data = res.data;
      })
    ResultService.getResultByUserIdAndExerciseId(userCurrent.id,3).then(res=> {
      console.log("Wrong+ Right",res.data[0].totalWrong + res.data[0].totalRight )
        if (res.data.length > 0 && isReset == false) {
          ResultDetailService.getResultDetailByUserIdAndExerciseId(userCurrent.id,3).then(res=> {
            setAnswers(res.data)
          })
          setStep(3)
        }
      })

    

    
    if (step ===3) {
      clearInterval(interval)
      newListAnswer = listAnswer.map(x => {x.userId=userCurrent.id; return x} )
      
      let formData = new FormData()
      const jsonLesson = JSON.stringify(newListAnswer)
      const blob = new Blob([jsonLesson], {
          type: 'application/json'
      });
      formData.append("answers",blob)

      axios.post('http://localhost:8080/api/resultdetail/addAnswers',formData,{
        headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
            ...authHeader()
        }
    })
    }
  },[step])

  const setListAnswer = (x,index)=> {
    listAnswer[index] = x;
    setAnswers(listAnswer)
  }

  const quizStartHandler = () => {
    setStep(2)
    let resultDto = {
      exerciseId:3,
      userId:userCurrent.id
    }
    ResultService.addResult(resultDto)
    interval = setInterval(() => setTime(prevTime => prevTime+1), 1000);
  }

  const resetClickHandler = ()=>{
    setIsReset(true)
    setActiveQuestion(0)
    setAnswers([])
    setStep(2)
    setTime(0)
    interval = setInterval(()=> setTime(prevTime => prevTime + 1), 1000)
  }

  return (
    <div className="UserExercise">
      {step === 1&& <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Questions data={quizData.data}
        onAnswerUpdate={setListAnswer}
        numberOfQuestion={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
         />}
         {step === 3 && <End results={answers}
         data={quizData.data} 
         onReset={resetClickHandler}
         onAnswersCheck={()=>{setShowModal(true)}}
         time={time} />}
         {showModal && <Modal onClose={() => setShowModal(false)} results={answers} data={quizData.data}/>}
    </div>
  );
}

export default UserExercisePage;
