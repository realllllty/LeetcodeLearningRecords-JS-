/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  arr1 = arr1.map(item => Number(item));
  arr2 = arr2.map(item => Number(item));
  let cur = 0;
  let res = 0;
  // 补齐长度
  const maxLength = Math.max(arr1.length, arr2.length);
  while (arr1.length < maxLength) arr1.push(0);
  while (arr2.length < maxLength) arr2.push(0);
  while (cur <= arr1.length) {
    if (arr1[cur] > arr2[cur]) {
      res = 1;
      break;
    } else if (arr1[cur] < arr2[cur]) {
      res = -1;
      break;
    } else {
      cur++;
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end