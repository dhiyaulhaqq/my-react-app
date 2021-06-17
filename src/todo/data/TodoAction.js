import TodoActionTypes from './TodoActionTypes';
// import TodoDispatcher from './TodoDispatcher';
import TodoDispatcher from '../../dispatcher/Dispatcher';

const TodoAction = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text: text
        })
    },

    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });
    },
};

window.TodoAction = TodoAction;

export default TodoAction;