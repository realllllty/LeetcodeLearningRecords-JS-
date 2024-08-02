/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = {};
    // 从node节点是否能够到达p和q节点？
    function dfs(node, p, q) {
        // 返回值：0,1,2
        if (node) {
            if (node == p || node == q) {
                return dfs(node.left, p, q) + dfs(node.right, p, q) + 1;
            } else {
                return dfs(node.left, p, q) + dfs(node.right, p, q)
            }
        } else {
            return 0;
        }
    }
    // 继续dfs2，直到发现能够满足dfs函数的最深节点
    function dfs2(node, p, q) {
        if (node) {
            // 先访问当前节点
            if (dfs(node, p, q) == 2) {
                // 更新节点
                res = node;
            }
            dfs2(node.left, p, q);
            dfs2(node.right, p, q);
        }
    }
    dfs2(root, p, q);
    return res;
};
// @lc code=end

