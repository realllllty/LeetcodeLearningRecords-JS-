/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // let res = {};
    // // 从node节点是否能够到达p和q节点？
    // function dfs(node, p, q) {
    //     // 返回值：0,1,2
    //     if (node) {
    //         if (node == p || node == q) {
    //             return dfs(node.left, p, q) + dfs(node.right, p, q) + 1;
    //         } else {
    //             return dfs(node.left, p, q) + dfs(node.right, p, q)
    //         }
    //     } else {
    //         return 0;
    //     }
    // }
    // // 继续dfs2，直到发现能够满足dfs函数的最深节点
    // function dfs2(node, p, q) {
    //     if (node) {
    //         // 先访问当前节点
    //         if (dfs(node, p, q) == 2) {
    //             // 更新节点
    //             res = node;
    //         }
    //         dfs2(node.left, p, q);
    //         dfs2(node.right, p, q);
    //     }
    // }
    // dfs2(root, p, q);
    // return res;

    // 24-9-2 二刷
    // 上面解法相当于遍历了两次树, 其实利用递归收集到两个target值就返回的特性, 遍历一次就行

    // 节点是空节点, p 或者是 q, 都返回当前节点
    // 返回的是 p 或 q 或 lca。
    // 如果遇到了 p，那么无需往下递归，这是因为，如果 q 在 p 的下面，那么 lca 是 p，如果 q 在别处，那么 lca 在 p 的上面
    // 所以继续递归不会找到 lca，所以这里直接返回了。
    if (root === null || root === p || root === q) {
        return root;
    }

    // 如果左右找到了, 就进行记录
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // 都找到了, 返回当前节点
    if (left && right) {
        return root;
    }

    return left || right || null;
};
// @lc code=end

