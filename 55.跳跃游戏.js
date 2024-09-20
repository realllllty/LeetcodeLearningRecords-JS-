/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let res = true;
    if (nums.length == 1) return true;
    if (nums[0] == 0) return false;
    for (let i = 0; i < nums.length; i++) {
        // 每当遇到有0的情况, 判断是否能够跳过这个0
        if (nums[i] === 0) {
            let j = i - 1;
            while (j >= 0) {
                // i 和 j 的差值就是0和目标的位置差
                if ((i - j) == nums[j] && i == nums.length - 1) {
                    j = -1;
                } else if ((i - j) >= nums[j]) {
                    // 不能跳过的情况
                    if (j == 0) {
                        res = false;
                        return res;
                    }
                    j--;
                } else {
                    // 能跳过的情况, 直接跳出内层循环
                    j = -1;
                }
            }
        }
    }
    return res;
    // 问题:
    // 1. 没有注意到最后一项为0的情况, 最后一项为0, 只需要到达不需要超过
    // 2. 长度为1和第一项为0的边缘case没有注意
};
// 维护能够到达的最远距离
// var canJump = function(nums) {
//     let mx = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i > mx) { // 无法到达 i
//             return false;
//         }
//         mx = Math.max(mx, i + nums[i]); // 从 i 最右可以跳到 i + nums[i]
//     }
//     return true;
// };

// @lc code=end


// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end