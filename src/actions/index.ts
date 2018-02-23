import { Action } from 'redux';
let nextTodoId = 0;

export interface AddTodoAction extends Action {
  type: string;
  id: number;
	description: string;
}

export interface DeleteTodoAction extends Action {
	type: string;
  id: number;
}

export const addTodo = (description: string) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		description
	}
}

export const deleteTodo = (id: number) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}