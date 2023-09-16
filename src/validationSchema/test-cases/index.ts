import * as yup from 'yup';

export const testCaseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  priority: yup.number().integer().nullable(),
  task_id: yup.string().nullable().required(),
});
