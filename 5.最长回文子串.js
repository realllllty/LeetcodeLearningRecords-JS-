/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let s1 = palindorome(s, i, i);
    let s2 = palindorome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
  function palindorome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    return s.substring(l + 1, r); //返回以l和r位中心的最长回文子串
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end