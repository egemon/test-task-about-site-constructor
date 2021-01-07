import { memo } from 'react'
import dynamic from 'next/dynamic'

const HeroBlock = dynamic(
  () => import('src/components/BlockComponents/HeroBlock/HeroBlock')
    .then(component => component.HeroBlock),
)
const ImageTextBlock = dynamic(
  () => import('src/components/BlockComponents/ImageTextBlock/ImageTextBlock')
    .then(component => component.ImageTextBlock),
)
const DataBlock = dynamic(
  () => import('src/components/BlockComponents/DataBlock/DataBlock')
    .then(component => component.DataBlock),
)

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
