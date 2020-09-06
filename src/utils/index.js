export const transUrl = (url) => {
  const index = url.indexOf("?")
  url = url.substring(index + 1)
  const arr = url.split("&")
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const arrs = arr[i].split("=")
    obj[arrs[0]] = arrs[1]
  }
  return obj
}
