import {FETCH_CHAPTERS, ADD_CHAPTER, EDIT_CHAPTER, DELETE_CHAPTER, UPDATE_CHAPTER} from '../../constants/ActionTypes'

// const initialState = { chapters: [] }
const initialState = []

const chapterReducer = (state=initialState, action) => {
    const {chapters} = action
    switch(action.type) {
        case FETCH_CHAPTERS:
            return [...chapters]
        case ADD_CHAPTER:
            return [...state,action.chapter]
        // case EDIT_CHAPTER:
        //     for (var i = state.length - 1; i >= 0; i--) {
        //         if (state[i].id === action.chapter.id) {
        //             state[i]=action.chapter;
        //         }
        //        }
        //     return [...state] 
        case DELETE_CHAPTER:
            for (var i = state.length - 1; i >= 0; i--) {
                if (state[i].id === action.chapter.id) {
                    state.splice(i, 1);
                }
               }
            
            return [...state]
        case UPDATE_CHAPTER:
            
            for (var i = state.length - 1; i >= 0; i--) {
                if (state[i].id === action.chapter.id) {
                    state[i]=action.chapter;
                }
            }
            return [...state]        
        default:
            return state
    }
}

export default chapterReducer;