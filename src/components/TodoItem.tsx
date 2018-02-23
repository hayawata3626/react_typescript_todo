import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';

interface ItemProps {
	todo:Todo;
	onDeleteTodo: (id:number) => void;
}

const TodoItem = ({todo, onDeleteTodo}:ItemProps) => {
	return (
		<div className="todo">
			<div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)}>ｘ</div>
			<li>{todo.description}</li>
		</div>
	)
}

export default TodoItem