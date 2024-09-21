/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let res = 0;
    // 创建窗口
    let start = 0;
    let end = k - 1;
    // 计算窗口当中的总和
    let acc = 0;
    for (let i = 0; i < k; i++) {
        acc += nums[i];
    }
    res = acc;
    // 滑动窗口
    while (end < nums.length - 1) {
        acc -= nums[start];
        start++;
        end++;
        acc += nums[end];
        res = Math.max(res, acc);
    }
    return (res / k);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMaxAverage;
// @after-stub-for-debug-end