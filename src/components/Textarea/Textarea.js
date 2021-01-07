import { memo, useCallback } from 'react'
import classNames from 'classnames'

import { useSetBlocks } from 'src/contexts/BlocksContext/useBlocksContext'
import styles from './index.module.css'

export const Textarea = memo(({
  // required props

  // optional props
}) => {
  const setBlocks = useSetBlocks()
  const handleChange = useCallback((event) => {
    const possiblyStringifiedBlocks = event.target.value
    setBlocks(possiblyStringifiedBlocks)
  }, [setBlocks])
  return (
    <textarea
      onChange={handleChange}
      className={classNames(
        styles.textarea,
      )}
    />
  )
})

Textarea.propTypes = {
  // required props

  // optional props
}

Textarea.defaultProps = {
  // optional props
}
