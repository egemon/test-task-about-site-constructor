export const fetchBlockData = async (url) => {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (err) {
    console.warn('error in fetch', err)
    throw err
  }
}
