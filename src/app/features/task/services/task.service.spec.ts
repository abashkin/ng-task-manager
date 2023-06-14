import { Task, TaskStatus } from '../models/task.model';
import { TaskService } from './task.service';

describe('TaskService', () => {
  const ActiveTasks: Task[] = [
    { id: 'a1', status: TaskStatus.Active, title: 'First' },
    { id: 'a2', status: TaskStatus.Active, title: 'Second' },
  ];
  const CompletedTasks: Task[] = [
    { id: 'c1', status: TaskStatus.Completed, title: 'FirstCompleted' },
    { id: 'c2', status: TaskStatus.Completed, title: 'SecondCompleted' },
  ];

  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();
  });

  describe('#addTask', () => {
    it('should add a task with a provided title', () => {
      const title = 'New Task Title';
      service.addTask(title);

      const addedTask = service['tasks'].shift();

      expect(addedTask?.title).toEqual(title);
      expect(addedTask?.status).toEqual(TaskStatus.Active);
    });
  });

  describe('#getAllTasks', () => {
    it('should return all tasks', () => {
      const tasks: Task[] = [...ActiveTasks, ...CompletedTasks];
      service['tasks'] = tasks;

      expect(service.getAllTasks()).toEqual(tasks);
    });
  });

  describe('#getTasksByStats', () => {
    const allTasks = [...ActiveTasks, ...CompletedTasks];
    beforeEach(() => {
      service['tasks'] = allTasks;
    });
    it('should return all tasks when status was not provided', () => {
      expect(service.getTasksByStatus(undefined)).toEqual(allTasks);
    });
    it('should return only ACTIVE tasks when Active status filter was provided', () => {
      expect(service.getTasksByStatus(TaskStatus.Active)).toEqual(ActiveTasks);
    });
    it('should return only Completed tasks when Completed status filter was provided', () => {
      expect(service.getTasksByStatus(TaskStatus.Completed)).toEqual(
        CompletedTasks
      );
    });
  });

  describe('#completeTask', () => {
    it('should set status to Completed for the provided task ID', () => {
      const id = 'id';
      const task: Task = {
        id,
        title: 'some title',
        status: TaskStatus.Active,
      };

      service['tasks'] = [task];
      service.completeTask(id);

      const changedTask = service['tasks'][0];

      expect(changedTask.status).toEqual(TaskStatus.Completed);
    });
  });
});
