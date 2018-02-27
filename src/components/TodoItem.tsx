import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';

interface ItemProps {
	todo:Todo;
	onDeleteTodo: (id:number) => void;
  onEditTodo: (id:number, description:string) => void;
  onToggleTodoEditable: (id:number) => void;
}

const TodoItem = ({todo, onDeleteTodo, onEditTodo, onToggleTodoEditable}:ItemProps) => {
  let inputValue: string;
	return (
		<li className="todo" onDoubleClick={() => onToggleTodoEditable(todo.id)}>
      {todo.editable
        ? <input type="text" onBlur={(e) => alert(inputValue)} onChange={(e) => inputValue = e.target.value}/>
        : <h2>{todo.description}</h2>}
			<div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)} >ｘ</div>
		</li>
	)
}

export default TodoItem