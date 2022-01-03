import Start from '../../components/UserExercise/Start'
import Question from '../../components/UserExercise/Question'
import End from '../../components/UserExercise/End'
import { useState } from 'react';
// import quizData from '../../data/quiz.json'
import { useEffect } from 'react/cjs/react.development';
import Modal from '../../components/UserExercise/Model';
import './css/UserExercise.css'
import axios from 'axios'

import {authHeader} from '../../services/auth-header';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

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


  useEffect(() => {
    axios.get('http://localhost:8080/api/question/findQuestionByExerciseId/3',{
        headers: {...headers, ...authHeader()},
    })
    .then(res => {
        quizData.data = res.data;
        console.log('Data: ', res.data)})
    if (step ===3) {
      clearInterval(interval)
      console.log("ClearInterval")
    }
  },[step])

  
  const quizStartHandler = () => {
    setStep(2)
    interval = setInterval(() => setTime(prevTime => prevTime+1), 1000);
  }

  const resetClickHandler = ()=>{
    setActiveQuestion(0)
    setAnswers([])
    setStep(2)
    setTime(0)
    interval = setInterval(()=> setTime(prevTime => prevTime + 1), 1000)
  }

  return (
    <div className="UserExercise">
      {step === 1&& <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Question data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
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
