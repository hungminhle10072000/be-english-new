
import * as Types from '../../constants/ActionTypes'

const questionReducerInitState = {nameExericse: '', listQuestionExercise: []}

const findIndex = (listQuestionExercise, id) => {

    let result = 1;
    
    listQuestionExercise.forEach( (itemQuestion, index) => {
        if(itemQuestion.id === id){
            result = index;
        }
    });
    return result;
}


const questionReducer = (state = questionReducerInitState, action) => {

    let index = -1;
    const {id, questionReadAdd,itemQuestionUpdate, questionListenAdd} = action

    switch (action.type) {
        case Types.GET_ALL_QUESTION_EXERCISE_BY_ID:
            return {...action.payload}
        case Types.DELETE_QUESTION_WITH_ID:
            index = findIndex(state.listQuestionExercise, id)
            state.listQuestionExercise.splice(index,1)
            return {...state}
        case Types.ADD_QUESTION_READ:
            state.listQuestionExercise.push(questionReadAdd)
            return {...state}
        case Types.ADD_QUESTION_LISTEN:
            state.listQuestionExercise.push(questionListenAdd)
            return {...state}    
        case Types.UPDATE_QUESTION:
            state.listQuestionExercise.forEach((item, index) => {
                if(item.id === itemQuestionUpdate.id){
                    state.listQuestionExercise[index] = itemQuestionUpdate
                }
            })
            return {...state}
        default:
            return state
    }
}

export default questionReducer;