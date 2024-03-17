/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let flatMatrix = [];
  let res = false;
  // 扁平化matrix数组
  // matrix.forEach((item) => {
  //   item.forEach((initem) => {
  //     flatMatrix.push(initem);
  //   })
  // })
  flatMatrix = matrix.flat();
  // 对处理数组实行二分查找
  let left = 0;
  let right = flatMatrix.length - 1;
  let cur = ~~((left + right)/2);
  while (left <= right) {
    if (flatMatrix[cur] === target) {
      res = true;
      break;
    } else if (flatMatrix[cur] > target) {
      right = cur - 1;
    } else {
      left = cur + 1;
    }
    cur = ~~((left + right)/2);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end