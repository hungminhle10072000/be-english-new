import { EDIT_CHAPTER} from '../../constants/ActionTypes'

const chapter = {
    name:'',
    courseName:''
}

const chapterEditReducer = (state=chapter, action) => {
    const {chapter} = action
    switch(action.type) {
        case EDIT_CHAPTER:
            return chapter
        default:
            return state
    }
}

export default chapterEditReducer;