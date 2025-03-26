import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { IUserInterface } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: IUserInterface | null = null;
  showAddNewTask = false;

  get getsSelectedUser() {
    return this.selectedUser;
  };

  onAddTask() {
    this.showAddNewTask = true;
  }

  onCancelTask() {
    this.showAddNewTask = false;
  }

  onCreateTask(task: {
    title: string;
    summary: string;
    date: string;
  }) {
    console.log(task);
    this.showAddNewTask = false
  }
   
  onSelectUser(userId: IUserInterface) {
    this.selectedUser = userId;
  }
}
