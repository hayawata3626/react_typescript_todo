import * as React from 'react';
import VisibleTodo from '../containers/VisibleTodo';
import AddTodoWrapper from '../containers/AddTodoWrapper';

/* css */
import '../css/App.css';
import '../css/list.css';

const App = () => (
	<div>
    <AddTodoWrapper />
    <VisibleTodo />
  </div>
)

export default App;
