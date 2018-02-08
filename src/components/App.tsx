import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/App.css';
import { Todo } from '../model/todo';
import TodoComponent from './Todo';

class App extends React.Component {
  public state: {todos:Todo[]};

  constructor(props:any) {
    super(props);
    this.state = {
      todos: [new Todo("ラーメン大へいく")]
    }
  }
  public addTodo(e:any) {
    if (e.keyCode !== 13) return;
    this.state.todos.push(new Todo(e.target.value))
    this.setState({
      todos: this.state.todos
    })
    const inputElm:any = ReactDOM.findDOMNode(this.refs.description);
    inputElm.value = "";
  }
  public comoleteTodo(e:any) {

  }

  public render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <input type="input" className="taskName" placeholder="タスク名" ref="description" onKeyDown={this.addTodo.bind(this)} />
        {this.state.todos.map((todo, index) => {
          return <TodoComponent key={index} todo={todo} />
        })}
      </div>
    );
  }
}

export default App;
