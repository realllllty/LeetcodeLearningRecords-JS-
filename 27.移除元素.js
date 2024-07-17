/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      // if equals to val, then splice it and don't change the index
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end