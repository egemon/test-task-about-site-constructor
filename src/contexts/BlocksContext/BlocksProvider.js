import { useCallback, useMemo, useState } from 'react'
import { validateBlocks } from 'src/contexts/BlocksContext/validation'
import { parseJSON } from 'src/contexts/BlocksContext/parseJSON'
import { blocksContext } from './blocksContext'

const emptyBlocks = []
export const BlocksProvider = ({
  children,
}) => {
  const [blocks, setBlocks] = useState(emptyBlocks)
  const [blocksError, setBlocksError] = useState('')
  const applyBlocksData = useCallback(
    (possiblyStringifiedBlocks) => {
      try {
        const newBlocks = parseJSON(possiblyStringifiedBlocks)
        // TODO: make yup validation eager to show user all errors
        validateBlocks(newBlocks)
        setBlocksError('')
        setBlocks(newBlocks)
      } catch (err) {
        console.log('err', err)
        setBlocksError(`${err.message}. Be aware that u see prev version of blocks, from last valid JSON `)
        // setBlocks(emptyBlocks)
      }
    },
    [
      setBlocksError,
      setBlocks,
    ],
  )

  const value = useMemo(() => ({
    blocks,
    setBlocks: applyBlocksData,
    blocksError,
    setBlocksError,
  }), [
    blocks,
    applyBlocksData,
    blocksError,
    setBlocksError,
  ])
  return (
    <blocksContext.Provider value={value}>
      {children}
    </blocksContext.Provider>
  )
}
