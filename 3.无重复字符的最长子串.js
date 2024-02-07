/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  let res = 1;
  let store = [];
  for (let i = 0; i < s.length; i++) {
    if (!store.length) {
      store.push(s[i]);
    } else {
      // 判断store当中是否有当前字母, 如果没有, 就进行添加
      if (store.includes(s[i])) {
        // 记录并清空数组(记录为最大值)
        res = res > store.length ? res : store.length;
        let index = store.indexOf(s[i]);
        store = store.slice(index + 1);
        store.push(s[i]);
      } else {
        store.push(s[i]);
      }
    }
  }
  res = res > store.length ? res : store.length;
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
