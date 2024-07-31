/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针
  // if (!head || !head.next) {
  //   return false;
  // }

  // let slow = head;
  // let fast = slow.next;

  // while (slow != fast) {
  //   if (!fast || !fast.next) {
  //     return false
  //   }
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }

  // return true;

  // 骚操作方法, JSON.stringify() 在遇到循环引用的时候会报错
  try {
    let str = JSON.stringify(head);
  } catch {
    return true;
  }
  return false;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end