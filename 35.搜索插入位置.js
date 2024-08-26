/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 将大于等于定义为满足要求
    // 循环不变量, L的左部分一定是小于, R的右部分一定是大于等于

    // 对区间的划分不是特别的清楚
    // 如果统一采用闭区间的形式
    
    // 确定左右边界
    let left = 0;
    let right = nums.length - 1;

    // 开始循环缩小边界, left 和 right 之间构成了查找的区间
    // 当 left <= right 的时候, 区间不为空
    // 为什么在等于的时候, 仍然构成区间呢 ----> 闭区间 [left, right]
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else { // nums[mid] >= target, 保证了右指针的右方都是大于等于target的
            right = mid - 1;
        }
    }

    return left;    
};
// @lc code=end

