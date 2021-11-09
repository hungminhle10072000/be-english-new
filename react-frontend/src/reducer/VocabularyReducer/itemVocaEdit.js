import * as Types from '../../constants/ActionTypes'

const itemVocabularyEdit = {}

const itemVocaEdit = (state=itemVocabularyEdit, action) => {

    switch (action.type) {
        case Types.GET_VOCA_ID:
            return action.itemVocaEdit;
        default:
            return state;
    }
}
export default itemVocaEdit;