import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.css'

export const HeroBlock = memo(({
  imageURI,
}) => (
  <img
    src={imageURI}
    alt={imageURI}
    className={classNames(
      styles.image,
    )}
    loading="lazy"
  />
))

HeroBlock.propTypes = {
  // required props

  // optional props
}

HeroBlock.defaultProps = {
  // optional props
}
