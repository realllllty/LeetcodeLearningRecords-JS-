/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
/*
贪心算法, 如果a和b的组合ab更大, 则a排在b的前面, 对整个数组按照规则进行排序;
sort方法, 对比ab和ba的字典序进行排序;
*/

var largestNumber = function (nums) {
  let snums = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    snums[i] = String(nums[i]);
  }
  snums.sort((a, b) => {
    // ab和ba 分别代表着a在前和b在前
    let ab = a + b;
    let ba = b + a;
    // ba 大于 ab, ba-ab 是>0, 此时b排在a前
    // ba 小于 ab, ba-ab 是<0, 此时a排在b前
    return ba - ab;
  });
  let res = snums.join("");
  while (res.at(0) === "0" && res.length > 1) {
    res = res.slice(1);
  }
  return res;
};
// @lc code=end
