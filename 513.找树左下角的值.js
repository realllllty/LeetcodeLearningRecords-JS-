/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let depth = 0;
    let maxDepth = 0;
    let res = 0;
    // 应该是先右后左, 左节点的值能够覆盖右节点的值
    let dfs = (node) => {
        if (!node) return;
        depth++;
        // 如果是最深的节点, 就更新res
        maxDepth = Math.max(maxDepth, depth);
        if (maxDepth === depth) {
            res = node.val;
        }
        dfs(node.right);
        dfs(node.left);
        depth--;
    }

    dfs(root);
    return res;

    // 或者是层序遍历, 感觉还天然一些
};
// @lc code=end

