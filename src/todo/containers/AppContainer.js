import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoAction';

function getStores() {
    return [TodoStore];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onAddTodo: TodoActions.addTodo
    };
}

export default Container.createFunctional(AppView, getStores, getState);