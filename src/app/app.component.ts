import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodosService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private todosService: TodosService){};
//'https://jsonplaceholder.typicode.com/todos/1'

  ngOnInit(): void {
    this.fetchTodos();
  };

  addTodo(): void {
    if(!this.todoTitle.trim()){
      return;
    };

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todosService.addTodo(newTodo)
      .subscribe( res => {
        this.todos.push(res);
        this.todoTitle = '';
      }
    );
  };

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe( res => {
        this.todos = res;
        this.loading = false;
      },
      err => {
        this.error = err.message;
      }
    );
  };

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe( () => {
        this.todos = this.todos.filter( todo => todo.id !== id);
      });
  };

  completeTodo(id: number): void {
    this.todosService.completeTodo(id)
      .subscribe( res => {
          this.todos.find( todo => todo.id === res.id).completed = true;
        },
        err => {
          this.error = err.message;
        }
      );
  };

};
