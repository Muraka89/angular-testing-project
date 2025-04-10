import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from "./header/header.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent, HeaderComponent],
})
export class AppComponent {
  title = 'angular-testing-project';




  addTask(task: string) {

  }


  deleteTask(task: string) {

  }

  getTasks(): string[] {
    return [];
  }

}
