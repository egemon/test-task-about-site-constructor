import { memo } from 'react'
// import PropTypes from 'prop-types'

import { useBlocks } from 'src/contexts/BlocksContext/useBlocksContext'
import { ErrorText } from 'src/components/ErrorText/ErrorText'
import { Block } from 'src/components/Blocks/Block/Block'

export const Blocks = memo(({
  // required props

  // optional props
}) => {
  const blocks = useBlocks()
  return (
    <div>
      <ErrorText />
      <ul>
        {blocks.map((block, index) => (
          <Block
            key={index} // eslint-disable-line react/no-array-index-key
            {...block}
          />
        ))}
      </ul>
    </div>
  )
})

Blocks.propTypes = {
  // required props

  // optional props
}

Blocks.defaultProps = {
  // optional props
}
