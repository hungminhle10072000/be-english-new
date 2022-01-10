import * as Types from '../constants/ActionTypes';

const statusButtonLoadingInit = {statusCheck: false}

const statusButtonLoading = (state = statusButtonLoadingInit, action) => {
    switch (action.type) {
        case Types.OPEN_ITEM_BUTTON_LOADING:
            return {statusCheck: true}
        case Types.CLOSE_ITEM_BUTTON_LOADING:
            return {statusCheck: false}
        default:
            return state
    }
}

export default statusButtonLoading;