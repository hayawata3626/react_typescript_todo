import { Todo } from "../model/todo";
import { State, initialState } from "../model/todo";
// import { AddTodoAction } from "../actions";


const todos = (state:State = initialState, action:any):State => {
  let todoMaxNum = state.todos.length;
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos:state.todos.concat(new Todo(todoMaxNum, action.description, action.editable, action.date)),
    }
    case 'DELETE_TODO':
      return {
        ...state,
        todos:state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      }
    case 'TOGGLE_EDITABLE':
      return {
        ...state,
        todos:state.todos.map((todo) => (todo.id === action.id) ? {...todo, editable: !todo.editable} : todo)
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.id) ? {...todo, description:action.description} : todo)
      }
    default:
      return state
  }
}

export default todos