import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useBlocks } from 'src/contexts/BlocksContext/useBlocksContext'
import { ErrorText } from 'src/components/ErrorText/ErrorText'
import { Block } from 'src/components/Blocks/Block/Block'
import styles from './index.module.css'

export const Blocks = memo(({
  // required props

  // optional props
}) => {
  const blocks = useBlocks()
  return (
    <div className={classNames(styles.root)}>
      <ErrorText />
      <ul>
        {blocks.map((block, index) => (
          <li
            key={index}// eslint-disable-line react/no-array-index-key
            className={classNames(styles.item)}
          >
            <Block
              {...block}
            />
          </li>
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
