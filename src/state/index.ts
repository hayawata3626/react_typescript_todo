import { Todo } from "../model/todo";

export interface State {
	todos: Todo[]
}

export const initialState:State = {
	todos:[],
}

