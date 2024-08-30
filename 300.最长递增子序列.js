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
  // let dp = new Array(nums.length).fill(1);

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // let res = 0;
  // for (let i = 0; i < dp.length; i++) {
  //   res = Math.max(res, dp[i]);
  // }
  // return res;
  
  // Vue3 diff当中不仅仅像这道题一样是最长自增子序列问题, 还需要获得序列的具体值
  dp (index, maxNum) {
    if () {
      
    } else {
      // 当当前的数字要大于最大值的时候, 就能够选择
      if (nums[index] > maxNum) {
        return Math.max(dp(index + 1, maxNum), dp(index + 1, nums[nums]) + 1);
      } 
    }
  }

};
// @lc code=end
