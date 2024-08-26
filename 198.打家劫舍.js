/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 数组的滚动
    let v2 = v1 = 0;
    for (let i = 0; i < nums.length; i++) {
        let calc = Math.max(v1, v2 + nums[i]);
        v2 = v1;
        v1 = calc;
    }
    return v1;
};
// @lc code=end

