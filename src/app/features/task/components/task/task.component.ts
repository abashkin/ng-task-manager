import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: Task;
  @Output() changeStatus: EventEmitter<string> = new EventEmitter<string>();

  changeTaskStatus(id: string) {
    this.changeStatus.emit(id);
  }

  isActive(): boolean {
    return this.task.status === TaskStatus.Active;
  }
}
