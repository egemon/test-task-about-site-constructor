import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.css'

// TODO: component code should be lazy in chunk
export const HeroBlock = memo(({
  imageURI,
}) => (
  <img
    src={imageURI}
    alt={imageURI}
    className={classNames(
      styles.image, // TODO: !important - please, don't forget to remove/rename this `className`
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
