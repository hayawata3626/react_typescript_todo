let nextTodoId = Math.random();

export interface AddTodoAction {
  type: string;
  id: number;
  description: string;
  date: Date
}

export interface DeleteTodoAction {
  type: string;
  id: number;
}

export const addTodo = (description: string, date: Date): AddTodoAction => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    description,
    date
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const editTodo = (id: number, description: string) => {
  return {
    type: 'EDIT_TODO',
    id,
    description
  }
}

export const toggleEditable = (id: number) => {
  return {
    type: 'TOGGLE_EDITABLE',
    id
  }
}