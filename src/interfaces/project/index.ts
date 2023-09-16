import { TaskInterface } from 'interfaces/task';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  client?: ClientInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  client_id?: string;
}
