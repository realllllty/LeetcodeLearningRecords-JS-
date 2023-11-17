/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //滑动窗口最大值--使用双端(递减)队列完成
  //队头对齐
  //队头: 对应的是当前需要出窗口的index
  //     对应的不是当前需要出窗口的index
  let queue = [];
  let result = new Array(nums.length - k + 1);
  let pushq = (item) => {
    while (queue.length > 0 && item > nums.at(-1)) {
      queue.pop();
    }
    queue.push(item);
  };
  for (let j = 0; j < k; j++) {
    //开始时, 将窗口大小个数字全部推入队列
    pushq(nums[j]);
  }
  for (let i = 0; i < nums.length - k + 1; i++) {
    //index 为滑动窗口末尾
    result[i] = queue[0];
    if (queue[0] === nums[i]) {
      queue.shift();
    }
    pushq(nums[i + k]);
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end
