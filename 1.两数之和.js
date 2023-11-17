/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 判断Map中是否有数字符合, 若符合则跳出并且返回值, 否则将其加入Map
    for (let [key, value] of map) {
      if (target - nums[i] === value) {
        return [key, i];
      } else {
        map.set(i, nums[i]);
      }
    }
  }
};
// @lc code=end
