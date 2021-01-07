import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useBlocksError } from 'src/contexts/BlocksContext/useBlocksContext'
import styles from 'src/components/ErrorText/index.module.css'

export const ErrorText = memo(({
  // required props
  // optional props
}) => {
  const blocksError = useBlocksError()
  console.log('blocksError', blocksError)
  return (
    <div
      className={classNames(
        styles.root,
      )}
    >
      {blocksError}
    </div>
  )
})

ErrorText.propTypes = {
  // required props

  // optional props
}

ErrorText.defaultProps = {
  // optional props
}
