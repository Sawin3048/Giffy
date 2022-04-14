export default function getPinSize({ width, height }) {
  const x = height / width
  const newHeight = 240 * x
  const size = Math.floor(newHeight / 10)
  return size
}
