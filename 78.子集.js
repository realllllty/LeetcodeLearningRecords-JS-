/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 回溯法, 可以先把树形结构(大概的)画一下
    let res = [];
    function dfs(path) {
        res.push(path);
        // path最后一个数值所对应的下标
        let lastIndex = nums.indexOf(path[path.length - 1])
        // 从lastNum后面的数字选取, 组成新的path
        for (let i = lastIndex + 1; i < nums.length; i++) {
            let tmppath = path.slice();
            tmppath.push(nums[i]);
            dfs(tmppath);
        }
    }
    dfs([]);
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end