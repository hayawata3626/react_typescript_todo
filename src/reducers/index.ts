import { Todo } from "../model/todo";
import { State, initialState } from "../state";
// import { AddTodoAction } from "../actions";


const todos = (state:State = initialState, action:any):State => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos:state.todos.concat(new Todo(action.id, action.description)),
			}
		case 'DELETE_TODO':
			return {
				...state,
				todos:state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			}
			
		default:
			return state
	}
}

export default todos