/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let queue = [];
  let res = [];
  if (root) {
    queue.push(root);
  }

  let divNode = {
    val: 'divide',
    left: null,
    right: null
  }
  queue.push(divNode);
  while (queue.length !== 1) {
    // 当queue不是只剩下分割节点的情况下
    let resLevel = [];
    while (queue[0].val !== 'divide') {
      // 同一层的操作
      resLevel.push(queue[0].val);
      if (queue[0].left) {
        queue.push(queue[0].left);
      }
      if (queue[0].right) {
        queue.push(queue[0].right);
      }
      queue.shift();
    }
    // 去掉这层的divide
    queue.shift();
    // 添加divide
    queue.push(divNode);
    res.push(resLevel);
  }
  let output = [];
  res.map(i => {
    output.push(i[i.length - 1]);
  })
  return output;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rightSideView;
// @after-stub-for-debug-end