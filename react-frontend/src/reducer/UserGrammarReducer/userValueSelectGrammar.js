import * as Types from '../../constants/ActionTypes'

const userValueSelectGrammarInit = []

const userValueSelectGrammar = (state = userValueSelectGrammarInit, action) => {
    switch (action.type) {
        case Types.USER_CREATE_VALUE_SELECT_GRAMMAR:
            let temp = []
            action.listValueKeySelect.forEach(function (item) {
                let itemSelect = {};
                itemSelect.value = item.id;
                itemSelect.label = item.name;
                temp.push(itemSelect);
            });
            return [...temp];
        default:
            return state
    }
}

export default userValueSelectGrammar;