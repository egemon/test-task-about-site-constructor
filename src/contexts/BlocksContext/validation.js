import { heroSchema } from 'src/components/BlockComponents/HeroBlock/scheme'
import { dataSchema } from 'src/components/BlockComponents/DataBlock/scheme'
import { imageTextSchema } from 'src/components/BlockComponents/ImageTextBlock/scheme'

const schemasByBlockType = {
  hero: heroSchema,
  'image-text': imageTextSchema,
  data: dataSchema,
}

export function validateBlocks(blocks) {
  return blocks.forEach((block) => {
    const schema = schemasByBlockType[block.type]
    if (schema) {
      return schema.validateSync(block)
    }
    throw new Error('UnknownBlockType')
  })
}
