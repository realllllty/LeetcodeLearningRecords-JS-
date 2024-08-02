/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let res = 0;
    // 以当前节点为切入点
    function dfs(node, sum) {
        if (node) {
            if (node.val === sum) {
                res++;
            }
            dfs(node.left, sum-node.val);
            dfs(node.right, sum-node.val);
        }
    }
    function dfs2(node, sum) {
        if (node) {
            // 以当前节点为路径头部进行计算
            dfs(node, sum);
            dfs2(node.left, sum);
            dfs2(node.right, sum);
        }
    }
    dfs2(root, targetSum);
    return res;
};
// @lc code=end

