/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.isA = true;
    headA = headA.next;
  }

  while (headB) {
    if (headB.isA) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};
// @lc code=end

