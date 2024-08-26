/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 对于第n阶来说, 可能来自 dp(n-1), 也可能来自dp(n-2)
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n];
};
// @lc code=end

