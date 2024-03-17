/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let res = true;
  let arr = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      res = false;
      break;
    }
    left ++;
    right --;
  }
  return res;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end