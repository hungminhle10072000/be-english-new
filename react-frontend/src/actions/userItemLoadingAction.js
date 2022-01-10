import * as Types from '../constants/ActionTypes';


const openItemLoading = () => {
    return {
        type: Types.OPEN_ITEM_LOADING_USER
    }
}

const closeItemLoading = () => {
    return {
        type: Types.CLOSE_ITEM_LOADING_USER
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    openItemLoading,
    closeItemLoading
}