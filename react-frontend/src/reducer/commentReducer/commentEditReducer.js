import { EDIT_COMMENT} from '../../constants/ActionTypes'

const comment = {
    name:'',
    courseName:''
}

const commentEditReducer = (state=comment, action) => {
    const {comment} = action
    switch(action.type) {
        case EDIT_COMMENT:
            return comment
        default:
            return state
    }
}

export default commentEditReducer;