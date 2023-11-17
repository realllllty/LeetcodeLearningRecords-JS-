/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 准备结果数组
  let res = [];
  // 准备BFS队列
  let queue = [];
  if (!root) {
    return res;
  }
  queue.push(root);

  while (queue.length) {
    // 进入每层的时候, 除了这一层的node没有其他层的node
    // 记录本层的node数量, 便于跳出层数
    let len = queue.length;
    // 记录本层的node值
    let thislevel = [];
    for (let i = 0; i < len; i++) {
      // 从本层的queue中取出node
      let cur = queue.shift();
      thislevel.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.push(thislevel);
  }
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end
