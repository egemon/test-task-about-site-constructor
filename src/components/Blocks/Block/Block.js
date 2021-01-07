import { memo } from 'react'

import { HeroBlock } from 'src/components/BlockComponents/HeroBlock/HeroBlock'
import { ImageTextBlock } from 'src/components/BlockComponents/ImageTextBlock/ImageTextBlock'
import { DataBlock } from 'src/components/BlockComponents/DataBlock/DataBlock'

export const Block = memo((block) => {
  switch (block.type) {
    case 'hero':
      return <HeroBlock {...block} />
    case 'image-text':
      return <ImageTextBlock {...block} />
    case 'data':
      return <DataBlock {...block} />
    default:
      return null
  }
})

// TODO: create single source of truth for blocks - block + component + validation scheme
Block.propTypes = {
  // required props

  // optional props
}

Block.defaultProps = {
  // optional props
}
