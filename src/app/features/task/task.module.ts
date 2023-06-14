import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';
import { TaskRoutingModule } from './task-routing.module';
import { TaskFilterItemComponent } from './components/task-filter-item/task-filter-item.component';

@NgModule({
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule],
  declarations: [
    TaskListComponent,
    TaskComponent,
    AddTaskFormComponent,
    TaskFilterItemComponent,
  ],
  providers: [TaskService],
  exports: [TaskListComponent],
})
export class TaskModule {}
