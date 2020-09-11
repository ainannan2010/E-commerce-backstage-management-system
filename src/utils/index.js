export const transUrl = (url) => {
  const index = url.indexOf("?")
  url = url.substring(index + 1)
  const arr = url.split("&")
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const arrs = arr[i].split("=")
    obj[arrs[0]] = decodeURIComponent(arrs[1])
  }
  return obj
}

// 处理已选的权限
export function getRightId(item, arr) {
  if (item.children.length) {
    item.children.forEach((item) => getRightId(item, arr))
  } else {
    arr.push(item.id)
  }
}

export function getRightId2(data) {
  return data.reduce((iter, val) => {
    if (!val.children.length) {
      iter.push(val.id)
    }

    return val.children.length
      ? [...iter, ...getRightId2(val.children)]
      : iter
  }, [])
}
