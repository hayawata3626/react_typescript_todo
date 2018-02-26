let nextTodoId = 0;

export interface AddTodoAction {
  type: string;
  id: number;
	description: string;
}

export interface DeleteTodoAction {
	type: string;
  id: number;
}
export interface EditTodoAction {
	type: string;
	id: number;
	editable:boolean;
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

export const editTodo = (id:number) => {
	return {
		type: 'EDIT_TODO',
		id,
		editable:false
	}
}