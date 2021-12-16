import {FETCH_CHAPTERS, ADD_CHAPTER, EDIT_CHAPTER, DELETE_CHAPTER, UPDATE_CHAPTER} from '../../constants/ActionTypes'

const initialState = []

const chapterReducer = (state=initialState, action) => {
    const {userCourse} = action
    switch(action.type) {
        case ADD_CHAPTER:
            return [...state,userCourse]
        default:
            return state
    }
}

export default chapterReducer;