/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const record = {};

  function dfs(path) {

    // 长度已经完整
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (let num of nums) {
      // 如果当前遍历数字已经存在于数字当中
      if (record[num]) {
        continue;
      }
      path.push(num);
      record[num] = true;
      dfs(path);
      path.pop();
      record[num] = false;
    }
  }
  dfs([]);
  return res;
};
// @lc code=end

