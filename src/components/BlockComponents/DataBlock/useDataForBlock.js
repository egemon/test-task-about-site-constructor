import { useCallback, useEffect, useState } from 'react'
import { fetchBlockData } from 'src/apis/dataBlocks/dataBlocksApi'

export function useDataForBlock(url) {
  const [data, setData] = useState(null)
  const [errorText, setErrorText] = useState('')
  // TODO check useCallback with asyn funcs
  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await fetchBlockData(url)
      console.log('fetchedData', fetchedData)
      // debugger
      // TODO: we can avoid parsing and stringifying here
      setData(JSON.stringify(fetchedData))
      setErrorText('')
    } catch (err) {
      setData(null)
      setErrorText('Error while fetch, try to refresh')
    }
  },
  [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    fetchData,
    errorText,
  }
}
