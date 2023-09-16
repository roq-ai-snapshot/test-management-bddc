const mapping: Record<string, string> = {
  clients: 'client',
  issues: 'issue',
  projects: 'project',
  tasks: 'task',
  'test-cases': 'test_case',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
