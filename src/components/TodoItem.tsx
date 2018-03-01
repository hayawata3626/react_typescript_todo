import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';

interface ItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, description: string) => void;
  onToggleTodoEditable: (id: number) => void;
}
let nowDate = new Date();
//アクセスした時に現時刻を取得
function getTimewnow(){
  console.log(nowDate, "アクセスしました");
}
window.onload = () => getTimewnow()

const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodoEditable }: ItemProps) => {
  const date:any = todo.date.toString();
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() +1;
  const day = newDate.getDate();

  let diff = nowDate.getTime() - newDate.getTime();
  let diffDay = Math.ceil(diff / 1000*60*60*24);

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
        ? <div>
          <span className="todo_Button_item is-completed">保存</span>
          <span className="todo_Button_item is-cancel">キャンセル</span> 
          </div>
        : <span className="todo_Button_item is-edit">編集</span>
      }
      </p>
      <p className="todo_date">{year + "/" + month + "/" + day}</p>
      <p>差：{diffDay}</p>
      <div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)} >ｘ</div>
      <select className="todo_priority" name="priority" id="name">
        <option value="Large">Large</option>
        <option value="Middle">Middle</option>
        <option value="Small">Small</option>
      </select>
    </li>
  )
}

export default TodoItem