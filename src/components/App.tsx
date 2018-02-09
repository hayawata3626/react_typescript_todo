import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Todo } from '../model/todo';
import Card from './Card';

/* css */
import '../css/App.css';
import '../css/list.css';

class App extends React.Component {
  public state: {todos:Todo[]};
  constructor(props:Todo) {
    super(props);
    this.state = {
      todos: [new Todo("Eat ramen")]
    }
  }

  public addTodo() {
    const inputElm: HTMLInputElement = ReactDOM.findDOMNode(this.refs.description) as HTMLInputElement;
    if(inputElm.value === "") return;
    this.state.todos.push(new Todo(inputElm.value))
    this.setState({
      todos: this.state.todos
    })
    inputElm.value = "";
  }


  public render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <input type="input" className="taskName" placeholder="タスク名" ref="description" />
        <button className="submitButton" onClick={this.addTodo.bind(this)}>Submit</button>
        <div className="todo">
          <div className="list active">
            <h2>Active</h2>
            {this.state.todos.map((todo, index) => {
              return todo.status === 0
              ? <Card key={index} todo={todo} />: "";
            })}
          </div>
          <div className="list completed">
            <h2>Completed</h2>
            {this.state.todos.map((todo, index) => {
              return todo.status === 1
              ? <Card key={index} todo={todo} />: "";
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
