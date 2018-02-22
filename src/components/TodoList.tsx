import * as React from 'react';
import Todo from './Todo'

import '../css/todo.css'

const TodoList = ({todos: []}) => (
	<ul className="todolist">
		<Todo/>
	</ul>
)

export default TodoList