import React,{useState, useEffect, useRef} from "react";
import './Exercise.css'

function Question({data, onAnswerUpdate,numberOfQuestion, activeQuestion, onSetActiveQuestion, onSetStep, index}) {
    const [selected, setSelected] = useState('')
    const [error, setError] = useState('')
    const radiosWrapper = useRef()

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked')
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    },[data])

    const changeHandler = (e) => {
        setSelected(e.target.value);
        onAnswerUpdate({questionId:data.id, q:data.question, userAnswer:e.target.value},index)
        if (error) {
            setError('')
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!')
        }
        onAnswerUpdate(prevState => [...prevState, { q:data.question, a:selected}]);
        setSelected('');
        if (activeQuestion < numberOfQuestion -1) {
            onSetActiveQuestion(activeQuestion +1)
        } else {
            onSetStep(3)
        }
    }

    return(
        <div className="card question">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{"Câu "+ index +": "+ data.question}</h2>
                    <div className="control" ref={radiosWrapper}>
                        {data.choices.map((choice,i) => (
                            <label className="radio has-background-light" key={i}>
                            <input type="radio" name={"answer"+index} value={choice} onChange={changeHandler}/>
                            {choice}
                        </label>
                        ))}
                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                    {/* <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button> */}
                </div>
            </div>
        </div>
    )
}
export default Question;