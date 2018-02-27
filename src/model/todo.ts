export class Todo {
	public description: string;
	public id: number
	public editable: boolean;

  constructor(id: number, description: string, editable:boolean) {
		this.id = id
		this.description = description
		this.editable = false
  }
}

export interface State {
	todos: Todo[]
}

export const initialState:State = {
	todos:[]
}

