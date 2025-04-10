import { Component } from '@angular/core';
import { task } from '../models/task';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: string[] = [];
  taskList:task[]=[];
  newTask:task={
    title:'',
  };


  addTask(task: void) {

    if (this.newTask.title !=''&&  0)
      {
      this.taskList.push(this.newTask);
      this.deleteTask();
    }else alert('No se guardo');

  }


  deleteTask(task: void) {
    this.newTask={
      title:''
    }
  }

  getTasks(): string[] {
    return [];
  }


  /*constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    console.log('Adding task:', task);
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }
  */
}
