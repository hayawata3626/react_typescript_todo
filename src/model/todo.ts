export class Todo {
  public description: string;
  public id: number
  public editable: boolean;
  public date: Date;

  constructor(id: number, description: string, editable: boolean, date: Date) {
    this.id = id
    this.description = description
    this.editable = false
    this.date = new Date();
  }
}

export interface State {
  todos: Todo[]
}

export const initialState: State = {
  todos: []
}

