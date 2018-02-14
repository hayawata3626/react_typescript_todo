import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Status, Todo } from '../model/todo';
import { Card } from './Card';

/* css */
import '../css/App.css';
import '../css/list.css';

class App extends React.Component {
  public state: {todos:Todo[], alertmessage: boolean}
  constructor(props:any) {
    super(props);
    this.state = {
      todos: [new Todo("Eat ramen")],
      alertmessage: false,
    }
  }

  public updateState(){
    this.setState({
      todos: this.state.todos
    })
  }

  public addTodo() {
    const inputElm = ReactDOM.findDOMNode(this.refs.description) as HTMLInputElement;
    if(inputElm.value === "") {
      this.setState({
        alertmessage: true,
      })
      return;
    }
    this.state.todos.push(new Todo(inputElm.value))
    this.setState({
      todos: this.state.todos
    })
    inputElm.value = "";
  }

  public changeStatus(todo:Todo, cardstatus:Status) {
    todo.status = cardstatus;
    this.updateState();
  }

  public removeCard(targetTodo: Todo){
    let remainingTask = this.state.todos.filter((todo, id) => {
        return targetTodo !== todo;
    })
    this.setState({
      todos: remainingTask
    })
  }

  public changeEditStatus(todo: Todo){
    todo.editable = !todo.editable;
    this.updateState();
  }

  public changeText(text: string, todo: Todo){
    todo.description = text;
    this.updateState();
  }

  public render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <input
          type="input"
          className="taskName"
          placeholder="タスク名"
          ref="description"
          onFocus={() => this.setState({
            alertmessage: false
          })}
        />
        {this.state.alertmessage ? <p className="inputfield alert">文字を入力してください</p> : ""}
        <button className="submitButton" onClick={this.addTodo.bind(this)}>Submit</button>
        <div className="todo">
          <div className="list active">
            <h2>Active</h2>
            {this.state.todos.map((todo, index) => {
              return todo.status === Status.Active
              ? <Card key={index} todo={todo}
                  changeStatus={this.changeStatus.bind(this)}
                  removeCard={this.removeCard.bind(this)}
                  changeEditStatus={this.changeEditStatus.bind(this)}
                  changeText={this.changeText.bind(this)}
                />
              : "";
            })}
          </div>
          <div className="list completed">
            <h2>Completed</h2>
            {this.state.todos.map((todo, index) => {
              return todo.status === Status.Completed
              ? <Card key={index} todo={todo}
                  changeStatus={this.changeStatus.bind(this)}
                  removeCard={this.removeCard.bind(this)}
                  changeEditStatus={this.changeEditStatus.bind(this)}
                  changeText={this.changeText.bind(this)}
                />
              : "";
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
