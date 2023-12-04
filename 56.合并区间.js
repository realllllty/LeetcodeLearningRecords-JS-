/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  // 现将intervals按照第一个元素进行排序(正序)
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // 进行比较(第一个元素和下一个的最后一个元素)
  function merge(vals) {
    let seq2;
    for (let len = 0; len < vals.length; len++) {
      if (len === 0) {
        res.push(vals[0]);
      }
      if (len > 0) {
        seq2 = len;
        // 如果能够合并的话(返回合并数组)
        if (res.at(-1).at(-1) >= vals[seq2].at(0)) {
          let merged = [];
          merged.push(res.at(-1)[0]);
          merged.push(
            res.at(-1).at(-1) > vals[seq2].at(-1)
              ? res.at(-1).at(-1)
              : vals[seq2].at(-1)
          );
          res.pop();
          res.push(merged);
        } else {
          // 如果不能够合并的话, 直接加入res数组
          res.push(vals[seq2]);
        }
      }
    }
  }
  merge(intervals);
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
