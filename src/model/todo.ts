// export enum Status {
//   Active,       // 0
//   Completed,    // 1
// }

export class Todo {
  public description: string;
  public taskDeadline: string;

  constructor( description: string, taskDeadline:string ) {
    this.description = description
    this.taskDeadline = taskDeadline
  }
}
