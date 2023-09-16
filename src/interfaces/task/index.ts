import { TestCaseInterface } from 'interfaces/test-case';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  test_case?: TestCaseInterface[];
  project?: ProjectInterface;
  _count?: {
    test_case?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  project_id?: string;
}
