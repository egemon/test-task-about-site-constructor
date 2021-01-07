import * as yup from 'yup'

export const dataSchema = yup.object().shape({
  type: yup.string().required(),
  url: yup.string().url().required(),
})
