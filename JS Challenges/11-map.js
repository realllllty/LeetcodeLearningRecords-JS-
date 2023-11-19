// 我的实现: 能够完成部分功能, 但是修改了原数组
// map()方法
const arr = [1, 2, 3];

// Array.prototype.map = function (callback) {
//   for (let index = 0; index < this.length; index++) {
//     this[index] = callback(this[index], index, this);
//   }
//   return this;
// };
const res = arr.map((ele, index, arr) => {
  return ele * 2;
});
console.log(res);

console.log("--------------------------------");
console.log("稀疏数组尝试");
let newarr = new Array(7);
const newarr2 = newarr.map((ele, index, arr) => {
  return ele * 2;
});
console.log(newarr2);

//correct ans
Array.prototype.map = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (this.hasOwnProperty(index)) {
      result[index] = callback(this[index], index, this);
    }
  }
  return result;
};
