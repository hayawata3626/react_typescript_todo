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
    <li className="todo">
      {todo.editable
        ? <input
            type="text"
            className="todo_editarea"
            defaultValue={todo.description}
            onChange={(e) => onEditTodo(todo.id, e.target.value)}
          />
        : <h2>{todo.description}</h2>
      }
      <p className="todo_Button" onClick={() => onToggleTodoEditable(todo.id)}>
      {todo.editable
        ? <span className="todo_Button_item is-completed">完了</span>
        : <span className="todo_Button_item is-edit">編集</span>
      }
      </p>
      <p className="todo_date">{date}</p>
      <div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)} >ｘ</div>
      <select className="todo_priority" name="priority" id="name">
        <option value="大">大</option>
        <option value="中">中</option>
        <option value="小">小</option>
      </select>
    </li>
  )
}

export default TodoItem