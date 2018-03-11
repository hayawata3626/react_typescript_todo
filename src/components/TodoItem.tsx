import * as React from 'react';
import '../css/todo.css';
import { Todo } from '../model/todo';
const moment = require('moment');

interface ItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, description: string) => void;
  onToggleTodoEditable: (id: number) => void;
  onEditDate: (id: number, date:string) => void;
}

let tempraryData:string;

const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodoEditable, onEditDate }: ItemProps) => {
  let todoDate = new Date(todo.date)
  let currentDate = new Date();
  let dateFlag = todoDate >= currentDate ? true : false;
  let dayDiff = Math.abs(moment().diff(moment(todoDate), "days", true));
  let realDiff = Math.round(dayDiff)
  debugger
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
      <p className="todoRegisterDate"><i className="far fa-clock"></i>{todo.date}</p>
      <p>
        {dateFlag && realDiff >= 0
          ? <span className="todoDate_limit">残り{`${realDiff}`}日です</span>
          : <span className="todoDate_limit is-over">期限切れです</span> 
         }
      </p>
      <input type="date" className="todoDate" onChange={ (e) => onEditDate(todo.id, e.target.value)}/>
    </li>
  )
}

export default TodoItem