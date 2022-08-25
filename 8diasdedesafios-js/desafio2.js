function fatiarray(array) {
  array.length > 3 ? (array = array.slice(3)) : (array.length = 0)
  return array
}

console.log(fatiarray([1, 2, 3, 4, 5, 6]))
console.log(fatiarray([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(fatiarray([4, 5, 6]))
console.log(fatiarray([5, 6]))
