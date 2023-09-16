import { TestCaseInterface } from 'interfaces/test-case';
import { GetQueryInterface } from 'interfaces';

export interface IssueInterface {
  id?: string;
  name: string;
  description?: string;
  status?: string;
  priority?: number;
  test_case_id: string;
  created_at?: any;
  updated_at?: any;

  test_case?: TestCaseInterface;
  _count?: {};
}

export interface IssueGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  test_case_id?: string;
}
