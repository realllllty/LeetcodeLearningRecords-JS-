/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    // 使用辅助数组
    let arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }

    // 两两交换位置
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let tmp = arr[2 * i];
        arr[2 * i] = arr[2 * i + 1];
        arr[2 * i + 1] = tmp;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].next = arr[i+1];
    }

    if (arr.length) {
        arr[arr.length - 1].next = null;
    }

    return arr[0] ?? null;
    // // 递归方式
    // var swapPairs = function(head) {
    //     if (head === null || head.next === null) {
    //         return head;
    //     }
    //     let first = head;
    //     let second = head.next;
    //     let others = head.next.next;
    //     // 先把前两个元素翻转
    //     second.next = first;
    //     // 利用递归定义，将剩下的链表节点两两翻转，接到后面
    //     first.next = swapPairs(others);
    //     // 现在整个链表都成功翻转了，返回新的头结点
    //     return second;
    // };


    // let node = head;
    // if (node && node.next) head = node.next;

    // while (node && node.next) {
    //     let tmp = node.next.next;
    //     node.next.next = node;
    //     node.next = tmp && tmp.next? tmp.next : tmp;
    //     node = tmp;
    // }

    // return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end