/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  // 目标为0, n=3, 从索引0开始
  return nSumTarget(nums, 3, 0, 0);
};

var nSumTarget = function(nums, n, start, target) {
  var sz = nums.length;
  var res = [];

  // 至少是个2sum问题,并且如果数组的长度小于n-sum的大小直接返回空数组
  if (n < 2 || sz < n) return res;

  // 当n为2的时候, 为2-sum问题, 使用双指针
  if (n == 2) {
    // 定义头和尾指针
    var lo = start, hi = sz - 1;
    while (lo < hi) {
      var sum = nums[lo] + nums[hi];
      var left = nums[lo], right = nums[hi];
      // 实际上就是寻找一个可能解的过程: 核心的思路就是跳过重复的值
      // 小于或者是大于目标值的情况下: 移动左或者是右指针, 直到刚好跳过重复的那个值
      // 等于目标值的情况下: 移动左和右指针, 直到刚好跳过重复的那个值
      if (sum < target) {
        // 如果和小于目标值, 移动左指针
        while (lo < hi && nums[lo] == left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] == right) hi--;
      } else {
        // 找到一组解, 将其加入结果数组
        res.push([left, right]);
        // 移动指针, 跳过重复的值
        while (lo < hi && nums[lo] == left) lo++;
        while (lo < hi && nums[hi] == right) hi--;
      }
    }
  } else {
    // 重点: 如何将一个n-sum问题递归解决
    for (var i = start; i < sz; i++) {
      // 对于每个元素求解以它开始的(n-1)-sum问题
      var sub = nSumTarget(nums, n-1, i+1, target - nums[i]);
      for (var j=0; j<sub.length; j++) {
        sub[j].push(nums[i]);
        res.push(sub[j]);
      }
      // 跳过重复的值
      while (i< sz-1 && nums[i] == nums[i+1]) i++;
    }
  }
  return res;
}
// @lc code=end

