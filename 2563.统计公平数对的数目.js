/*
 * @lc app=leetcode.cn id=2563 lang=javascript
 *
 * [2563] 统计公平数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    let res = 0;
    // 针对,,, 好烦, 如果不告诉自己这个是二分查找相关的, 还能够想到应该怎么做吗
    // 思路: 先排序数组, 再通过二分查找找到符合条件的pair, 排序只是更改pair实际值的顺序, 实际的下标是能够满足要求的

    // 排序nums, 从小到大
    nums.sort((a, b) => a - b);

    // 二分查找函数, 返回符合条件的下标
    function searchBinary(target) {
        let left = 0;
        let right = nums.length - 1;

        // 在区间范围内进行查找, 左右闭区间, 红蓝染色法
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

    // 对每个数组当中的数nums[i], 满足 lower-nums[i] <= nums[j] <= upper-nums[i]
    nums.forEach((item) => {
        let ubound = searchBinary(lower - item + 1);
        let lbound = searchBinary(upper - item);
        if (ubound > lbound) {
            res += (ubound - lbound);
        }
    })
    
    return res;
};
// @lc code=end

