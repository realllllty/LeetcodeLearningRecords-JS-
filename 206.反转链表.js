/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let res = {};
  let cur = head;
  let pre = {};
  while (cur.next) {
    res = cur;
    let temp = cur.next;
    // 将当前指针的next反转
    cur.next = pre;
    // 前移指针
    pre = cur;
    cur = temp;
  }
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end