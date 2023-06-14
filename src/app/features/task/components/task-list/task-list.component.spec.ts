import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;
  let route: ActivatedRoute;

  beforeEach(() => {
    taskServiceSpy = jasmine.createSpyObj<TaskService>('TaskService', [
      'addTask',
      'getTasksByStatus',
      'completeTask',
    ]);
    route = new ActivatedRoute();

    component = new TaskListComponent(taskServiceSpy, route);
  });

  describe('#addTask', () => {
    const title = 'Task';
    it('should call a corresponding service function', () => {
      component.addTask(title);
      expect(taskServiceSpy.addTask).toHaveBeenCalledWith(title);
    });

    it('should request list of tasks after adding', () => {
      const statusFilter = 'statsFilter';
      component.currentFilter = statusFilter;
      component.addTask(title);
      expect(taskServiceSpy.getTasksByStatus).toHaveBeenCalledWith(
        statusFilter
      );
    });
  });

  describe('#completeTask', () => {
    const id = 'TaskID';
    it('should call a corresponding service function', () => {
      component.completeTask(id);
      expect(taskServiceSpy.completeTask).toHaveBeenCalledWith(id);
    });

    it('should request list of tasks after completing', () => {
      const statusFilter = 'statsFilter';
      component.currentFilter = statusFilter;
      component.completeTask(id);
      expect(taskServiceSpy.getTasksByStatus).toHaveBeenCalledWith(
        statusFilter
      );
    });
  });
});
