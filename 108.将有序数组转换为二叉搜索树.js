/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 将有序数组转换为二叉搜索树
  // 二叉搜索树的中序遍历是有序的
  // 取nums的中间值作为root
  function recformtree(arr) {
    let newnode = {};
    let mid = Math.floor(arr.length / 2);
    let num = arr[mid]; // 如果是偶数取得是中间靠后的值
    newnode.val = num;
    if (0 > mid - 1) {
      newnode.left = null;
    } else {
      newnode.left = recformtree(arr.slice(0, mid));
    }
    if (mid + 1 > arr.length - 1) {
      newnode.right = null;
    } else {
      newnode.right = recformtree(arr.slice(mid + 1, arr.length));
    }
    return newnode;
  }
  let res = recformtree(nums);
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortedArrayToBST;
// @after-stub-for-debug-end
