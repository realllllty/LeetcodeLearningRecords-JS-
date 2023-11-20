/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let value = 0;
  let flag = false;
  if (!root) {
    return false;
  }
  function dfs(node) {
    // 如果是叶节点
    if (!node.left && !node.right) {
      value += node.val;
      if (value === targetSum) {
        flag = true;
      }
    } else {
      value += node.val;
      if (node.right) {
        dfs(node.right);
      }
      if (node.left) {
        dfs(node.left);
      }
    }
    // 退出当前节点, 减去value
    value -= node.val;
  }
  dfs(root);
  return flag;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end
