import { EDIT_CHAPTER} from '../../constants/ActionTypes'

const chapter = {}

const chapterEditReducer = (state=chapter, action) => {
    const {chapter} = action
    console.log('ChapterEditReducer1: ',chapter)
    switch(action.type) {
        case EDIT_CHAPTER:
            console.log('ChapterEditReducer: ',chapter)
            return chapter
        default:
            return state
    }
}

export default chapterEditReducer;