export enum Status {
  Active,       // 0
  Completed,    // 1
  Checkout      // 2
}

export class Todo {
  public description: string;
  public status = Status.Active;

  constructor( description: string ) {
    this.description = description
  }
  public toCompleted(){
    this.status = Status.Completed
  }
  public toCheckout(){
    this.status = Status.Checkout
  }
  public toActive(){
    this.status = Status.Active
  }
}
