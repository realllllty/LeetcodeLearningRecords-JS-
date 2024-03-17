/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//   // 如何使用二分查找完成这道题???
//   // point ---- end - start --- point-1
//   /**
//    * 在有条件的情况下===>进行二分
//    * 什么条件?
//    * 满足, 区间有序, 并且在这个区间范围之内
//    */
//   let pre = 0;
//   let bac = nums.length - 1;
//   let cur = ~~((pre + bac) / 2);
//   while (pre <= bac) {
//     if () {
//       // 相等, 直接返回
//     } else if (nums[pre] <= nums[index]) {
//       // 左边有序, 两种情况
//       if (nums[index] > target) {
//         bac = index - 1;
//       } else if (nums[index] < target) {
//         pre = index + 1;
//       }
//     } else if (nums[index] <= nums[bac]){
//       // 右边有序
//     }
//   }
  
// };
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
          return mid;
      }
      
      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          if (nums[mid] < target && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  
  return -1;
};
// @lc code=end

