import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task-filter-item',
  templateUrl: './task-filter-item.component.html',
  styleUrls: ['./task-filter-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFilterItemComponent {
  @Input() filter: string | undefined = undefined;
  @Input() isActive: boolean;
  @Output() setTaskFilter: EventEmitter<string> = new EventEmitter<string>();

  handleFilterClick(filter: string | undefined): void {
    this.setTaskFilter.emit(filter);
  }
}
