const nextElementList = (list, value) => {
  let currentIndex = list.indexOf(value)
  const nextIndex = (currentIndex + 1) % list.length
  const nextValue = list[nextIndex]

  return nextValue
}

export default nextElementList
