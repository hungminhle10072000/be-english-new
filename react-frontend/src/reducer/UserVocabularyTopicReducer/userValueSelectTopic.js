import * as Types from '../../constants/ActionTypes'

const userValueSelectTopicInit = []

const userValueSelectTopic = (state = userValueSelectTopicInit, action) => {
    switch (action.type) {
        case Types.USER_CREATE_VALUE_SELECT_TOPIC:
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

export default userValueSelectTopic;