export enum TaskStatus {
  Active = 'Active',
  Completed = 'Completed',
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
