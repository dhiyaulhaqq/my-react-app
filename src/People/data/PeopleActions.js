import Dispatcher from "../../dispatcher/Dispatcher";
import ActionTypes from "./ActionTypes";

const Action = {
    addPerson(name) {
        Dispatcher.dispatch({
            type: ActionTypes.ADD_PERSON,
            name: name
        });
    },

    deletePerson(id) {
        Dispatcher.dispatch({
            type: ActionTypes.DELETE_PERSON,
            id: id
        });
    },

    updatePerson(id, name) {
        Dispatcher.dispatch({
            type: ActionTypes.UPDATE_PERSON,
            id: id,
            name: name
        });
    }
};

window.action = Action;

export default Action;