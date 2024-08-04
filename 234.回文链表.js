/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const vals = [];
  while (head) {        // 丢进数组里
    vals.push(head.val);
    head = head.next;
  }
  let start = 0, end = vals.length - 1; // 双指针
  while (start < end) {
    if (vals[start] != vals[end]) {     // 理应相同，如果不同，不是回文
      return false;
    }
    start++;
    end--;      // 双指针移动
  }
  return true;  // 循环结束也没有返回false，说明是回文
};
// @lc code=end

