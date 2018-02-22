import { Todo } from "../model/todo";
import { AddTodoAction } from "../actions";

const todos = (state:Todo[] = [], action:AddTodoAction) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				new Todo(action.description, action.taskDeadline),
			] 
			
		default:
			return state
	}
}

export default todos