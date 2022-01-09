import React,{useState, useEffect, useRef} from "react";
import Question from "./Question";

function Questions({data, onAnswerUpdate,numberOfQuestion, activeQuestion, onSetActiveQuestion, onSetStep}) {
    const [selected, setSelected] = useState('')
    const [error, setError] = useState('')
    const radiosWrapper = useRef()

  

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('')
        }
    } 

    const nextClickHandler = (e) => {
        onSetStep(3)

        // if (selected === '') {
        //     return setError('Please select one option!')
        // }
        // onAnswerUpdate(prevState => [...prevState, {q:data.question, a:selected}]);
        // setSelected('');
        // if (activeQuestion < numberOfQuestion -1) {
        //     onSetActiveQuestion(activeQuestion +1)
        // } else {
        //     onSetStep(3)
        // }
    }

    return(
        <div style={{width:"100%"}}>
            {data.map((x,i) => (
                <Question key={x.id} data={x}
                onAnswerUpdate={onAnswerUpdate}
                numberOfQuestion={numberOfQuestion}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={onSetActiveQuestion}
                onSetStep={onSetStep}
                index={i}
                 />
            ))}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next Page</button>
        </div>
    )
}
export default Questions;