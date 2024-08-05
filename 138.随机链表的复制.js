/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    // 一个哈希表+两次遍历(一次负责克隆节点, 利用哈希表搭建节点映射关系, 一次负责还原节点关系)
    let cur = head;
    let record = new Map();

    // 利用哈希表记录链表内容
    while (cur) {
        let cloneNode = {
            val: cur.val
        };
        record.set(cur, cloneNode);
        cur = cur.next;
    }
    
    cur = head;

    while (cur) {
        let node = record.get(cur);
        node.next = record.get(cur.next) ?? null;
        node.random = record.get(cur.random) ?? null;
        cur = cur.next;
    } 
    
    return record.get(head);
};
// @lc code=end

