import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';

interface ItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, description: string) => void;
  onToggleTodoEditable: (id: number) => void;
}

let tempraryData:string;
let todoDateArr:any = [];

const registerTodoDate = (id: number, date: string) => {
  todoDateArr.push({id,date})
  console.log(todoDateArr);
  localStorage.setItem("date", JSON.stringify(todoDateArr))
  localStorage.getItem('')
}

function compareTodoDate(){
  const newDate = new Date();
  let registerdate = localStorage.getItem('date')
  console.log(registerdate);
  console.log(newDate);
}

window.addEventListener('load', compareTodoDate, false );

const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodoEditable }: ItemProps) => {
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
      <div className="todo_Button" onClick={() => onToggleTodoEditable(todo.id)}>
      {todo.editable
        ? <div className="todo_editArea">
            <span className="todo_Button_item is-completed">保存</span>
            <span
              className="todo_Button_item is-cancel" defaultValue={todo.description}
              onClick={() => {todo.description = tempraryData}}>キャンセル
             </span>
          </div>
        : <span className="todo_Button_item is-edit" onClick={() => {tempraryData = todo.description;}}>編集</span>
      }
      </div>
      <div className="todo_closeButton" onClick={() => onDeleteTodo(todo.id)} >ｘ</div>
      <select className="todo_priority" name="priority" id="name">
        <option value="Large">Large</option>
        <option value="Middle">Middle</option>
        <option value="Small">Small</option>
      </select>
      <input type="date" className="todoDate" onChange={ (e) => registerTodoDate(todo.id, e.target.value)}/>
    </li>
  )
}

export default TodoItem