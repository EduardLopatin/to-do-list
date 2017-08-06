export class toDo {
  constructor(text: any){
    this.text = text;
  }
  public text: any;
}

export class toDoCollection {
  private todos: toDo[];

  constructor(){
    this.todos = [];
  }
  public addToDo(toDo: toDo) {
    this.todos.push(toDo);
  }
  public deleteToDo(toDo: toDo){
    let index = this.todos.indexOf(toDo);
    this.todos.splice(index, 1)
  }

  public getToDos() {
    return this.todos;
  }
}
