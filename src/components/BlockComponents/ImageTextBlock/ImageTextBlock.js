import { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.css'

export const ImageTextBlock = memo(({
  // required props
  // type,
  imageURI,
  text,
  // optional props
  title,
  leftToRight,
}) => (
  <div
    className={classNames(
      styles.root,
      leftToRight && styles.leftToRight,
    )}
  >
    <img
      className={classNames(styles.image)}
      src={imageURI}
      alt={title}
    />
    <div className={classNames(styles.text)}>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  </div>
))

ImageTextBlock.propTypes = {
  // required props
  // optional props
  leftToRight: PropTypes.bool,
}

ImageTextBlock.defaultProps = {
  // optional props
  leftToRight: true,
}
