import axios from 'axios';
import queryString from 'query-string';
import { TestCaseInterface, TestCaseGetQueryInterface } from 'interfaces/test-case';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTestCases = async (
  query?: TestCaseGetQueryInterface,
): Promise<PaginatedInterface<TestCaseInterface>> => {
  const response = await axios.get('/api/test-cases', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTestCase = async (testCase: TestCaseInterface) => {
  const response = await axios.post('/api/test-cases', testCase);
  return response.data;
};

export const updateTestCaseById = async (id: string, testCase: TestCaseInterface) => {
  const response = await axios.put(`/api/test-cases/${id}`, testCase);
  return response.data;
};

export const getTestCaseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/test-cases/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTestCaseById = async (id: string) => {
  const response = await axios.delete(`/api/test-cases/${id}`);
  return response.data;
};
