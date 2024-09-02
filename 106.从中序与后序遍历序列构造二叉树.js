/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;

    // 先从后序遍历当中找到根节点
    let root = postorder[postorder.length - 1];
    let rootIndex = inorder.findIndex(v => v.val === root.val);
    
    // 按照这个root进行切分中序遍历, slice是前闭后开, 每次都要忘
    let rightInorder = inorder.slice(0, rootIndex);
    let leftInorder = inorder.slice(rootIndex + 1);

    let rightPostorder = postorder.slice(0, rightInorder.length);
    let leftPostorder = postorder.slice(rightInorder.length, postorder.length);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end