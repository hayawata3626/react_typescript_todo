import { Action } from 'redux';
let nextTodoId = 0;

export interface AddTodoAction extends Action {
  type: string;
  id: number;
	text: string;
	description: string;
	taskDeadline: string;
}

export const addTodo =  (description: string) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		description
	}
}