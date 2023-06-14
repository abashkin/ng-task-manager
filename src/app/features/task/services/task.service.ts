import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: TaskStatus.Active,
    };

    this.tasks.unshift(newTask);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksByStatus(status: string | undefined): Task[] {
    if (!status) {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === status);
  }

  completeTask(id: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = TaskStatus.Completed;
    }
  }
}
