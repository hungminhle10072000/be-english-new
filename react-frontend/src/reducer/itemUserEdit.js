import * as Types from '../constants/ActionTypes'

var itemUserEditState = {};

const itemUserEditing = (state = itemUserEditState, action) => {
    switch (action.type) {
        case Types.EDIT_USER:
            return action.user;
        default:
            return state
    }
}

export default itemUserEditing;