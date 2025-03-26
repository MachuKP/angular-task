import { Component, computed, input } from '@angular/core';

import { IUserInterface } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
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
