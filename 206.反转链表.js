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
  // 感觉还是通过栈这种形式更加简单易懂啊, 操作指针转来转去有点恼火
  let stack = [];

  while (head) {
    stack.unshift(head);
    head = head.next;
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i + 1]) {
      stack[i].next = stack[i + 1];
    } else {
      stack[i].next = null;
    }
  }
  return stack[0] ?? null;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end