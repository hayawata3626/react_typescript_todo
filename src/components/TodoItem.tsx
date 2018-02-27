import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';

interface ItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, description: string) => void;
  onToggleTodoEditable: (id: number) => void;
}

const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodoEditable }: ItemProps) => {
  const date:string = todo.date.toString();
  return (
    <li className="todo" onDoubleClick={() => onToggleTodoEditable(todo.id)}>
      {todo.editable
        ? <input type="text" defaultValue={todo.description} onBlur={(e) => onToggleTodoEditable(todo.id)} onChange={(e) => onEditTodo(todo.id, e.target.value)} />
        : <h2>{todo.description}</h2>
      }
      <p className="todo_date">{date}</p>
      <div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)} >ｘ</div>
      <select name="priority" id="name">
        <option value="大">大</option>
        <option value="中">中</option>
        <option value="小">小</option>
      </select>
    </li>
  )
}

export default TodoItem