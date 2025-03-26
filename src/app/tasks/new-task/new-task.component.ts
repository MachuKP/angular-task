import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // we can use signal with two way binding but you don't need to read signal like this value() when binding it
  // enterTitle = signal('');
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enterTitle = '';
  enterSummary = '';
  enterDueDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const newTask = {
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDueDate,
    };
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }
}
