import * as Types from '../constants/ActionTypes';

const openButtonLoading = () => {
    return {
        type: Types.OPEN_ITEM_BUTTON_LOADING
    }
}


const closeButtonLoading = () => {
    return {
        type: Types.CLOSE_ITEM_BUTTON_LOADING
    }
}

export default {
    openButtonLoading,
    closeButtonLoading
}