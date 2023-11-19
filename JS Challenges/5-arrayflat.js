/* 注释多行代码: option shift a */
/* 出现的问题:
    - 对于array.flat() 的用法不熟悉
    - 在array的prototype中添加的flat()方法, 
    array调用可以直接通过this访问数据
    - 自己的方法在flat方法内部创建了一个方法, 
    这样不方便递归调用时传入depth参数(有点麻烦了), 
    其实应该直接递归flat()方法的 
*/

const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];

Array.prototype.flat = function (depth) {
  // final output
  let res = [];
  let recurse = (input) => {
    input.forEach((element) => {
      // 如果一个element是一个数组: 递归处理
      if (Array.isArray(element)) {
        recurse(element);
      } else {
        // element是普通元素, 加入到结果数组中
        res.push(element);
      }
    });
  };
  recurse(this);
  return res;
};

let output = arr.flat();
console.log(output);

//正解
Array.prototype.flat = function (deep = 1) {
  let res = [];
  deep--;
  for (const p of this) {
    if (Array.isArray(p) && deep >= 0) {
      res = res.concat(p.flat(deep));
    } else {
      res.push(p);
    }
  }
  return res;
};
