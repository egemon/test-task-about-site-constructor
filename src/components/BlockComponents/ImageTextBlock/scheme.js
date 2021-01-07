import * as yup from 'yup'

export const imageTextSchema = yup.object().shape({
  type: yup.string().required(),
  imageURI: yup.string().url().required(),
  text: yup.string().required(),
  title: yup.string(),
  leftToRight: yup.bool().default(() => true),
})
