import { IssueInterface } from 'interfaces/issue';
import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface TestCaseInterface {
  id?: string;
  name: string;
  description?: string;
  status?: string;
  priority?: number;
  task_id: string;
  created_at?: any;
  updated_at?: any;
  issue?: IssueInterface[];
  task?: TaskInterface;
  _count?: {
    issue?: number;
  };
}

export interface TestCaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  task_id?: string;
}
