/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = []; //递减栈
  let result = new Array(temperatures.length); //结果数组
  for (let i = 0; i < temperatures.length; i++) {
    // 判断栈顶index所对应的温度是否小于当前index的温度
    // 如果小于则将栈顶index出栈,更新结果数组为两个index的差值
    // 重复执行知道栈顶index温度大于当前index温度,将当前index入栈
    if (stack) {
      while (temperatures[stack.at(-1)] < temperatures[i]) {
        let popelement = stack.pop();
        result[popelement] = i - popelement;
      }
    }
    stack.push(i);
  }
  for (element of stack) {
    result[element] = 0;
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end