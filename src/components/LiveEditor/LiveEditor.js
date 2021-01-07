import { memo } from 'react'

import { BlocksProvider } from 'src/contexts/BlocksContext/BlocksProvider'
import { Textarea } from 'src/components/Textarea/Textarea'
import { Blocks } from 'src/components/Blocks/Blocks'
import styles from './index.module.css'

export const LiveEditor = memo(({
  // required props

  // optional props
}) => (
  <BlocksProvider>
    <div className={styles.root}>
      <Textarea />
      <Blocks />
    </div>
  </BlocksProvider>
))

LiveEditor.propTypes = {
  // required props

  // optional props
}

LiveEditor.defaultProps = {
  // optional props
}
