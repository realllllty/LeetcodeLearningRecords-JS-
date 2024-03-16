/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 搞笑吧哥
  // return nums.indexOf(target);
  let index = ~~(nums.length/2);
  let pre = 0;
  let bac = nums.length - 1;
  let res = -1;
  // 如何处理这里的edge case?
  /**
   * 本来是
      bac = index & pre = index
      这种情况下, 到最后根本挪不动...
      事实上是, bac和pre边界本身也是搜索的范围之内
   */
  while(pre <= bac) {
    if (nums[index] == target) {
      res = index;
      break;
    } else if (nums[index] > target) {
      // 当处于前半
      bac = index - 1;
    } else {
      // 当处于后半
      pre = index + 1;
    }
    index = ~~((pre + bac)/2)
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end