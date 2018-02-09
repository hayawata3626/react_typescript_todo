import * as React from 'react';
import { Todo, Status } from '../model/todo';
import '../css/card.css';

export interface Props {
  todo: Todo,
  changeStatus: Function
}

export class Card extends React.Component<Props> {
  render(){
    return (
      <div className="card">
        <h3 className="card_description">{this.props.todo.description}</h3>
        <div className="card_closeButton"></div>
        <button className="card_button is-active" ref="active" onClick={() => this.props.changeStatus(this.props.todo, Status.Active)}>Active</button>
        <button className="card_button is-completed" ref="completed" onClick={() => this.props.changeStatus(this.props.todo, Status.Completed)}>Completed</button>
      </div>
    )
  }
}
