import { createContext } from 'react'

export const blocksContext = createContext({
  setBlocks: () => {},
  blocks: [],
  blocksError: '',
})
