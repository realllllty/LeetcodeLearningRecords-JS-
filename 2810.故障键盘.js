/*
 * @lc app=leetcode.cn id=2810 lang=javascript
 *
 * [2810] 故障键盘
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  let res = [];
  for (let c of s) {
    if (c === 'i') {
      res.reverse();
    } else {
      res.push(c);
    }
  }
  return res.join('');
};
// @lc code=end

