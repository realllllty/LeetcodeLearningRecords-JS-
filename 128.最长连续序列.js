/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  // 对nums数组进行排序(递增)
  nums.sort((a, b) => a - b);
  // 数组去重
  nums = Array.from(new Set(nums));
  let res = [];
  let count = 1;
  let finalcount = 1;
  res.push(nums[0]);
  // 遍历nums数组
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      res.push(nums[i]);
      count++;
    } else {
      // 清空数组
      finalcount = finalcount < count ? count : finalcount;
      res = [];
      count = 1;
      res.push(nums[i]);
    }
  }
  finalcount = finalcount < count ? count : finalcount;
  return finalcount;
};
// @lc code=end
