// 处理权限的层级解构
const getTrees = list => (
  list.map(elt => {
    let items = {}
    elt.rights.forEach(item => {
      let key = item.parentId
      if (items[key]) {
        items[key].push(item)
      } else {
        items[key] = []
        items[key].push(item)
      }
    })

    elt.children = formatTrees(items)
    return elt
  }))

const getTrees2 = list => {
  let items = {}
  list.map(elt => {
    let key = elt.parentId
    if (items[key]) {
      items[key].push(elt)
    } else {
      items[key] = []
      items[key].push(elt)
    }
  })
  return formatTrees(items)
}

function formatTrees(elts, pid) {
  let result = []
  if (!elts[pid]) {
    return result
  }

  elts[pid].forEach(elt => {
    elt.children = formatTrees(elts, elt.id)
    result.push(elt)
  })

  return result
}

export {
  getTrees,
  getTrees2,
  formatTrees
}
