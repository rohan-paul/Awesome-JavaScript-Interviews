/*
I wanted to flatten my deep object to one level depth.

My input:
*/

const input = {
  user: {
    key_value_map: {
      CreatedDate: "123424",
      Department: {
        Name: "XYZ",
      },
    },
  },
}

/* Expected output:

{
    "user.key_value_map.CreatedDate": "123424",
    "user.key_value_map.Department.Name": "XYZ"
}
My note - Mostly all solutions will involve some implementation of recursion here
 */
const flattenObject = obj => {
  let flattened = {}
  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue // ie. if the object does not have the 'i' property as its own property, ie. the object does not have any property to enumerate

    if (typeof obj[i] === "object" && obj[i] !== null) {
      var flatObject = flattenObject(obj[i])
      for (let j in flatObject) {
        if (!flatObject.hasOwnProperty(j)) continue
        flattened[i + "." + j] = flatObject[j]
      }
    } else {
      flattened[i] = obj[i]
    }
  }
  return flattened
}

console.log(flattenObject(input))
