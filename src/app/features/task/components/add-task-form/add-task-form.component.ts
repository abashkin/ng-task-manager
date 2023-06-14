import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskFormComponent {
  @Output() addTask: EventEmitter<string> = new EventEmitter<string>();

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  submit() {
    const { title } = this.taskForm.value;
    if (title) {
      this.addTask.emit(title);
    }
    this.taskForm.reset();
  }
}
