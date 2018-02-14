export enum Status {
  Active,       // 0
  Completed,    // 1
}

export class Todo {
  public description: string;
  public status = Status.Active;
  public editable = false;
  public taskDeadline: string;

  constructor( description: string, taskDeadline:string ) {
    this.description = description
    this.taskDeadline = taskDeadline
  }
  public toCompleted(){
    this.status = Status.Completed
  }
  public toActive(){
    this.status = Status.Active
  }
}
