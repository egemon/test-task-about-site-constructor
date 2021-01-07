import { memo } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useDataForBlock } from 'src/components/BlockComponents/DataBlock/useDataForBlock'
import styles from './index.module.css'

// TODO: Truncate the data to keep the text length reasonable
export const DataBlock = memo(({
  // required props
  url,
  // optional props
}) => {
  const {
    data,
    fetchData,
    errorText,
  } = useDataForBlock(url)
  return (
    <div
      className={classNames(
        styles.root, // TODO: !important - please, don't forget to remove/rename this `className`
      )}
    >
      <div>
        <button
          type="button"
          onClick={fetchData}
        >
          Refresh
        </button>
      </div>
      <div>
        <span>- Data response -</span>
        <p className={classNames(styles.data)}>{errorText || data}</p>
      </div>
    </div>
  )
})

DataBlock.propTypes = {
  // required props

  // optional props
}

DataBlock.defaultProps = {
  // optional props
}
