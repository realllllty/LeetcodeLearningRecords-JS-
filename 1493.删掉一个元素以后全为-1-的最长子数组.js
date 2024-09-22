/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    // 也是完全没有什么思路啊, 真的是有点头疼
    // let arr = nums;
    // let separated = nums.join('').split('0').map(i => i.split(''));
    // let res = 0;
    // if (!arr.find(i => i === 0)) {
    //     return arr.length - 1;
    // } else {
    //     if (separated.length === 1) {
    //         return separated[0].length;
    //     }
    //     // 找到separated当中相邻两个最大值
    //     for (let i = 0; i < separated.length - 1; i++) {
    //         let f = separated[i].length;
    //         let l = separated[i + 1].length;
    //         res = Math.max(res, (f + l));
    //     }
    //     return res;
    // }
    // 上面的方案有比较大的问题, 没有考虑到连续两个0的情况

    // 滑动窗口方案, 只需要保证只有一个0的子数组当中的1的数量最多即可
    // 1 1 1 0 1 1 1 0 1 1
    let l = 0; // 左指针
    let ans = 0; // 子数组中1的数量
    let cnt0 = 0; // 子数组中0的数量

    for (let r = 0; r < nums.length; r++) {
        cnt0 += 1 - nums[r]; // 如果nums[r]是0，cnt0就会加1

        // 如果0的数量大于1，移动左指针
        while (cnt0 > 1) {
            cnt0 -= 1 - nums[l];
            l++;
        }

        // 计算满足条件的子数组长度（减1是因为题目要求删除一个元素）
        ans = Math.max(ans, r - l);
    }

    return ans;
};
// @lc code=end