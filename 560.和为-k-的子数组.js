/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // let i = 0, j = 0;
  // let wintotal = 0;
  // while (i < nums.length && j < nums.length) {
  //   // 窗口中的计数总和小于
  //   if (wintotal < k) {

  //   }
  // }
  const map = { 0: 1 };
  let prefixSum = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map[prefixSum - k]) {
      res += map[prefixSum - k];
    }
    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return res;
  
};
// @lc code=end

