export class Todo {
	public description: string;
	public id: number

  constructor(id: number, description: string ) {
		this.id = id
		this.description = description
  }
}
