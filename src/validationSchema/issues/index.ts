import * as yup from 'yup';

export const issueValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  priority: yup.number().integer().nullable(),
  test_case_id: yup.string().nullable().required(),
});
