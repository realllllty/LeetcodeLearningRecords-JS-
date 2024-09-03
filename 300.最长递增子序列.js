/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 定义dp数组, 用于记录在当前index : i下的最长序列值是多少(默认长度为1)
  const dp = new Array(nums.length).fill(1);
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 对当前的j(i-index前的index枚举), 可以选择j, 也可以不选择j, 对于每个不同的j, 都存储其最大值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
// @lc code=end
