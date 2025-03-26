import { Injectable, signal } from '@angular/core';
import { INewTaskInterface } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(task: INewTaskInterface, userId: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    };
    this.tasks.update(currentTasks => [newTask, ...currentTasks]);
    this.saveTask();
  }

  removeTask(taskId: string) {
    this.tasks.update(currentTasks => currentTasks.filter((task) => task.id !== taskId));
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
