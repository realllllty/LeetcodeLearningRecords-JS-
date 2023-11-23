/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //   let res = null;
  // 输入对应区间的先序遍历和中序遍历, 返回TreeNode
  function buildTree(pred, ind) {
    // 当前node的值应该等于传入pred的第一个节点
    // let node = null;
    // node.val = pred[0];
    // 再次划分左右区间, 获取中序遍历root所在index
    let k = ind.indexOf(pred[0]);
    // 获取整个数组的长度
    let len = pred.length;
    // 获取L数量
    let numl = k;
    // 获取R数量
    let numr = len - k - 1;
    let left =
      k === 0 ? null : buildTree(pred.slice(1, k + 1), ind.slice(0, k));
    let right =
      k + 1 === len
        ? null
        : buildTree(pred.slice(k + 1, len), ind.slice(k + 1, len));
    let node = { val: pred[0], left, right };
    return node;
  }

  return buildTree(preorder, inorder);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end
