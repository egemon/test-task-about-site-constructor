import { blocksContext } from 'src/contexts/BlocksContext/blocksContext'
import { useContext } from 'react'

export const useBlocksContext = () => useContext(blocksContext)
export const useSetBlocks = () => {
  const { setBlocks } = useBlocksContext()
  return setBlocks
}
export const useBlocks = () => {
  const { blocks } = useBlocksContext()
  return blocks
}
export const useBlocksError = () => {
  const { blocksError } = useBlocksContext()
  console.log('blocksError', blocksError)
  return blocksError
}
