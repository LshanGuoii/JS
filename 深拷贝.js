
function isObject(obj) {
  const type = typeof obj
  return (type !== null) && (type === 'object' || type === 'function')
}

function deepClone(obj) {
  if (!isObject(obj)) {
    return obj
  }
  const newObj = {}
  for (const key in obj) {
    newObj[key] = deepClone(obj[key])
  }

  return newObj
}

const obj = {
  name: "ls",
  age: 23,
  friend: {
    name: "lilei",
    address: {
      city: "深圳"
    }
  }
}
const newObj = deepClone(obj)
console.log(newObj === obj)

obj.friend.name = "haha"
obj.friend.address.city = "长沙"
console.log(newObj)
