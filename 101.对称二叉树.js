/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // cao, 我怎么连简单题都不会做, 啊啊啊啊啊啊啊啊
    return Compare(root.left, root.right);
};
function Compare(leftNode, rightNode) {
    if (!leftNode && !rightNode) {
        return true;
    }
    if (!leftNode && rightNode) {
        return false;
    } else if (leftNode && !rightNode) {
        return false;
    } else if (leftNode.val !== rightNode.val) {
        return false;
    } else if (leftNode.val === rightNode.val) {
        return Compare(leftNode.left, rightNode.right) && Compare(leftNode.right, rightNode.left);
    }
}
// @lc code=end

