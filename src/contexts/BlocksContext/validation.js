import * as yup from 'yup'

const heroSchema = yup.object().shape({
  type: yup.string().required(),
  imageURI: yup.string().url().required(),
})

const imageTextSchema = yup.object().shape({
  type: yup.string().required(),
  imageURI: yup.string().url().required(),
  text: yup.string().required(),
  title: yup.string(),
  leftToRight: yup.bool().default(() => true),
})

const dataSchema = yup.object().shape({
  type: yup.string().required(),
  url: yup.string().url().required(),
})

const schemasByBlockType = {
  hero: heroSchema,
  'image-text': imageTextSchema,
  data: dataSchema,
}

export function validateBlocks(blocks) {
  return blocks.forEach((block) => {
    const schema = schemasByBlockType[block.type]
    if (schema) {
      console.log('schema.validateSync()', schema.validateSync(block))
      return schema.validateSync(block)
    }
    throw new Error('UnknownBlockType')
  })
}
