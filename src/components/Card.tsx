import * as React from 'react';
import { Todo, Status } from '../model/todo';
import '../css/card.css';

export interface Props {
  todo: Todo,
  changeStatus: Function,
  removeCard: Function,
  changeEditStatus: Function,
  changeText: Function
}

export class Card extends React.Component<Props> {
  render(){
    return (
      <div className="card">
        {this.props.todo.editable ?
          <input
            type="text"
            className="card_writeArea"
            placeholder="タスク名"
            onChange={(e) => this.props.changeText(e.target.value, this.props.todo)} onBlur={() => this.props.changeEditStatus(this.props.todo)}
            ref="iputValue"
          />
        :
          <h3
            className="card_description"
            onClick={() => this.props.changeEditStatus(this.props.todo)}>{this.props.todo.description}
          </h3>
        }
        <div className="card_deadline">
          <i className="far fa-clock"></i>
          <p className="card_deadline_detail">{this.props.todo.taskDeadline}</p>
        </div>
        <div
          className="card_closeButton"
          onClick={() => this.props.removeCard(this.props.todo)}>
        </div>
        <button
          className="card_button is-active"
          ref="active"
          onClick={() => this.props.changeStatus(this.props.todo, Status.Active)}>
          Active
        </button>
        <button
          className="card_button is-completed"
          ref="completed"
          onClick={() => this.props.changeStatus(this.props.todo, Status.Completed)}>
          Completed
        </button>
      </div>
    )
  }
}
