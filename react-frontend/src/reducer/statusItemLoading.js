import * as Types from '../constants/ActionTypes';

const statusItemLoadingInit = {statusCheck: false}

const statusItemLoading = (state = statusItemLoadingInit, action) => {
    switch (action.type) {
        case Types.OPEN_ITEM_LOADING_USER:
            return {statusCheck: true}
        case Types.CLOSE_ITEM_LOADING_USER:
            return {statusCheck: false}
        default:
            return state
    }
}

export default statusItemLoading;