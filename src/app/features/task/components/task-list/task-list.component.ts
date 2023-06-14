import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskFilters: string[] = [...Object.values(TaskStatus)];
  currentFilter: string | undefined = undefined;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ status }) => {
      this.currentFilter = status;
      this.tasks = status
        ? this.taskService.getTasksByStatus(status)
        : this.taskService.getAllTasks();
    });
  }

  completeTask(id: string) {
    this.taskService.completeTask(id);
    this.tasks = this.taskService.getTasksByStatus(this.currentFilter);
  }

  addTask(title: string) {
    this.taskService.addTask(title);
    this.tasks = this.taskService.getTasksByStatus(this.currentFilter);
  }

  taskTrackByFn(index: number, task: Task) {
    return task.id;
  }
}
