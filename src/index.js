import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './People/Layout';
// import Layout from './pages/Layout';
// import Layout from './todo/Layout';

const el = <Layout />

const root = document.getElementById('root');

ReactDOM.render(el, root);

import TodoActions from './todo/data/TodoAction';

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');

// import PeopleActions from './People/data/PeopleActions';

// PeopleActions.addPerson('Will');
// PeopleActions.addPerson('Steve');

