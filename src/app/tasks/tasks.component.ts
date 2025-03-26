import { Component, computed, input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { IUserInterface } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent, NgIf, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<IUserInterface>();
  isOpenAddTaskModal = false;

  constructor(private tasksService: TasksService) {}

  selectedUserTasks = computed(() =>
    this.tasksService.getUserTasks(this.user().id)
  );

  onOpenAddTask() {
    this.isOpenAddTaskModal = true;
  }

  onCloseAddTask() {
    this.isOpenAddTaskModal = false;
  }
}
