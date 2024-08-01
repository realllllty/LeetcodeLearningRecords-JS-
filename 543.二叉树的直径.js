/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    globalMax = 1;

    function maxLength(node) {
        if (!node) {
            return 0;
        }
        let l = maxLength(node.left);
        let r = maxLength(node.right);

        globalMax = Math.max(globalMax, l + r + 1)

        return Math.max(l, r) + 1;
    }

    maxLength(root);
    return globalMax - 1;
}

// @lc code=end

