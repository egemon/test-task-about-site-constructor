import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.css'

export const ExampleComponent = memo(({
  // required props

  // optional props
}) => (
  <div
    className={classNames(
      styles.root,
    )}
  >
    ONLY COPY AND PASTE!
  </div>
))

ExampleComponent.propTypes = {
  // required props

  // optional props
}

ExampleComponent.defaultProps = {
  // optional props
}
