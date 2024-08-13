/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 额滴神呐, 怎么难成这样...
    function halfSearch(nums, target) {
        // 还是按照35题的思路, 查找闭区间
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    let start = halfSearch(nums, target);
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]; // nums 中没有 target
    }
    let end = halfSearch(nums, target + 1) - 1;
    return [start, end];
};
// @lc code=end

