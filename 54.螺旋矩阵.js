/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
问题回顾:
- 多重数组如果是前面的层为undifined的话会报错的
    - (和最后一层为undefined完全不一样)
- switch case
    - 写法问题
    - break忘记写了
- 只顾着写flag边界了, 忘记了题目的墙边界
- ++和—符号问题, 如果使用这两个, 在数组索引当中是会引起变量本身的变化的
- 双层数组的初始化问题
    - 使用Array.from({length: xxx}, ()⇒ {})从类数组构造新数组
    - 在函数体中没有写返回值
*/

var spiralOrder = function (matrix) {
  // 首先记录矩阵数
  let count = matrix.length * matrix[0].length;
  // 结果数组
  let res = [];
  let i = 0;
  let j = 0;
  let dir = "r";
  // 构建flag辅助数组
  let helper = Array.from({ length: matrix.length }, () => {
    return Array.from({ length: matrix[0].length }, () => 0);
  });
  helper[0][0] = 1;

  // 构建移动函数
  function move(input) {
    switch (input) {
      case "r":
        // 判断向右空间是否足够(j必须要小于长度-1)
        if (j < matrix[0].length - 1 && !helper[i][j + 1]) {
          helper[i][j++] = 1;
          dir = "r";
        } else {
          move("d");
        }
        break;
      case "d":
        // 判断向下空间是否足够(i必须小于长度-1)
        if (i < matrix.length - 1 && !helper[i + 1][j]) {
          helper[i++][j] = 1;
          dir = "d";
        } else {
          move("l");
        }
        break;
      case "l":
        // 判断向左空间是否足够(j必须大于0)
        if (j > 0 && !helper[i][j - 1]) {
          helper[i][j--] = 1;
          dir = "l";
        } else {
          move("u");
        }
        break;
      case "u":
        if (i > 0 && !helper[i - 1][j]) {
          helper[i--][j] = 1;
          dir = "u";
        } else {
          move("r");
        }
        break;
    }
  }

  // 当还有数没有被遍历的时候执行循环
  while (count) {
    // 进入循环, 将当前数字推入结果数组
    res.push(matrix[i][j]);
    count--;
    // 向下移动
    if (count) {
      // 执行移动过程
      move(dir);
    }
  }
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end
