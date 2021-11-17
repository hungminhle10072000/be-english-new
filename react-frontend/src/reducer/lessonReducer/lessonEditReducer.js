import { EDIT_LESSON} from '../../constants/ActionTypes'

const lesson = {}

const lessonEditReducer = (state=lesson, action) => {
    const {lesson} = action
    console.log('LessonReducer: ',lesson)
    switch(action.type) {
        case EDIT_LESSON:
            console.log('LessonReducer: ',lesson)
            return lesson
        default:
            return state
    }
}

export default lessonEditReducer;