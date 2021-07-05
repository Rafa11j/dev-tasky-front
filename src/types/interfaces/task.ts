import { TaskStatus } from '../enum/taskStatus';
import { PriorityTypeChecked } from '../types/priority';

export interface ITask {
  id: string;
  name: string;
  end_date: Date;
  description: string;
  priority: PriorityTypeChecked;
  status: TaskStatus;
  user_id: string;
}

export interface ICreateTask {
  name: string;
  end_date: Date;
  description: string;
  priority: PriorityTypeChecked;
}

export interface IShowStatisticsTask {
  open: number;
  in_progress: number;
  finished: number;
}
