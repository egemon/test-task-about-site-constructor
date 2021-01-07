import * as yup from 'yup'

export const heroSchema = yup.object().shape({
  type: yup.string().required(),
  imageURI: yup.string().url().required(),
})
