interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Client'],
  tenantRoles: [
    'Administrator',
    'Project Manager',
    'Test Manager',
    'Developer',
    'End User',
    'QA',
    'PO',
    'System Admin',
  ],
  tenantName: 'Client',
  applicationName: 'test management tool',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own profile', 'View projects', 'View tasks', 'View issues'],
  ownerAbilities: ['Manage users', 'Manage clients', 'Manage projects', 'Manage tasks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/94600b44-af64-4e7f-a106-6bbdb9b1a940',
};
