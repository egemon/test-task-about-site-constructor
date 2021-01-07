export function parseJSON(possiblyStringifiedBlocks) {
  let blocks = []
  if (!possiblyStringifiedBlocks) {
    return []
  }
  try {
    blocks = JSON.parse(possiblyStringifiedBlocks)
  } catch (err) {
    throw new Error('InvalidJSON')
  }
  return blocks
}
