// 1.set
const array = [1, 2, 3, 4, 4, 5, 6, 6];
// const uniqueArray = [...new Set(array)];
// const uniqueArray = array.filter((item,index,cur) => cur.indexOf(item) === index);

// const uniqueArray = array.reduce((acc,cur)=>{
//   if(!acc.includes(cur)) {
//     acc.push(cur)
//   }
//   return acc
// },[])

// 使用 indexOf 和 forEach：
// const uniqueArray = [];
// array.forEach((value) => {
//   if (uniqueArray.indexOf(value) === -1) {
//     uniqueArray.push(value);
//   }
// });

// 使用 ES6 Map
const uniqueArray = Array.from(new Map(array.map(value => [value,value])).values())



console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]
