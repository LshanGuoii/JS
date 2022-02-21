// function flatten(arr) {
//   var res = [];
//   arr.map(item => {
//       if(Array.isArray(item)) {
//           res = res.concat(flatten(item));
//       } else {
//           res.push(item);
//       }
//   });
//   return res;
// }

function flat(arr, depth = 1) {
  if (depth > 0) {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
    }, []);
  }
  return arr.slice();

}
console.log(flat([2, [33, 45], [5, 4, [33]], 8]))