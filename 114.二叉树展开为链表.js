/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // 如何实现函数flatten?
  // 将root的左树和右树拉平, 将左树放在右树和根的中间




};

function straight (node) {

  // 递归边界, 当node是叶子结点
  if () {
    // 拉直左子树
    straight(node.left);
    // 拉直右子树
    straight(node.right);
  }



  // 合并操作(能够执行合并操作的前提就是左右子树都是直的)
  let tmp = node.right;
  node.right = node.left;
  let last = node.left;
  while (last.right !== null) {
    last = last.right;
  }
  last.right = tmp;

}
// @lc code=end

