import * as React from 'react';
import { Todo } from '../model/todo';
import '../css/todo.css';

export interface Props {
 todo: Todo;
}

export default function TodoComponent({todo}: Props) {
  return (
    <div className="todo">
      <p className="todo_title">タスク名</p>
      <h3>{todo.description}</h3>
      <button className="complete_button">completed</button>
    </div>
  )
}
