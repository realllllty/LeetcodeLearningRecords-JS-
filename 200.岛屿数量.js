/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 宽高都是从0开始计算
  // 计算岛屿数量(dfs)
  let height = grid.length;
  let width = grid[0].length;
  let res = 0;
  function movable(x, y) {
    return x >= 0 && x < height && y >= 0 && y < width && grid[x][y] !== "0";
  }
  // 定义dfs函数
  function dfs(i, j) {
    // 将当前位置从1改为0
    grid[i][j] = "0";
    // 对四个方向进行移动(上下左右)
    if (movable(i - 1, j)) {
      dfs(i - 1, j);
    }
    if (movable(i + 1, j)) {
      dfs(i + 1, j);
    }
    if (movable(i, j - 1)) {
      dfs(i, j - 1);
    }
    if (movable(i, j + 1)) {
      dfs(i, j + 1);
    }
    return true;
  }
  // 对整个grid进行遍历
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = numIslands;
// @after-stub-for-debug-end
