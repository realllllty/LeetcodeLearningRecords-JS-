/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let h = new Map(),
    k;
  for (let i = 0; i < strs.length; i++) {
    h.has((k = strs[i].split("").sort().join("")))
      ? h.get(k).push(strs[i])
      : h.set(k, [strs[i]]);
  }
  return Array.from(h.values());
};
// @lc code=end
