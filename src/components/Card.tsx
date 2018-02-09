import * as React from 'react';
import { Todo } from '../model/todo';
import '../css/card.css';

export interface Props {
  todo: Todo;
}

export default function Card({todo}: Props) {
  return (
    <div className="card">
      <h3 className="card_description">{todo.description}</h3>
      <button className="complete_button">completed</button>
    </div>
  )
}
