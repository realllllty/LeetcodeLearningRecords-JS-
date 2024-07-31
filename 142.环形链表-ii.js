/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let obj = {};
  let cur = 0;
  let pos = -1;
  while (head.next !== null) {
    // 当前对应值在表当中是否存在
    if (obj[head.value]) {
      pos = obj[head.value];
      break;
    } else {
      obj[head.value] = cur;
      cur++;
      head = head.next;
    }
  }
  return pos;
};
// @lc code=end

