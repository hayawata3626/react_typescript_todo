import * as React from 'react';
import Todo from './Todo'

const TodoList = ({todos: []}) => (
	<ul className="todolist">
		<Todo/>
	</ul>
)

export default TodoList