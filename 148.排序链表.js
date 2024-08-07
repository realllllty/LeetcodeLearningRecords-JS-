/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    let cur = head;
    let arr = [];

    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }   

    // 比较函数期望返回的是一个数字（正数、负数或零），而不是一个布尔值（true 或 false）。
    arr.sort((a, b) => {
        return a.val - b.val;
    })
    
    arr.map((item, index) => {
        item.next = arr[index + 1] ?? null;
    })

    return arr[0] ?? null;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end