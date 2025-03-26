import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IUserInterface } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // reactive vs signal should use only one of them
  // user = input.required<IUserInterface>();
  @Input({ required: true }) user!: IUserInterface;
  @Input({ required: true }) selectedUser!: IUserInterface | null;
  @Output() select = new EventEmitter<IUserInterface>();

  // computed values get memoized, they would not get re-executed until one of their producers have changed.
  // userAvatar = computed(() => {
  //   return `assets/users/${this.user.avatar}`;
  // })

  get isSelected() {
    return this.user.id === this.selectedUser?.id;
  }

  get userAvatar() {
    return `assets/users/${this.user.avatar}`;
  }

  onButtonClick() {
    this.select.emit(this.user);
  }
}
