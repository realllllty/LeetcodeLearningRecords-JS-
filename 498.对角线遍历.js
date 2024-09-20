/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const res = [];
    const [m, n] = [mat.length, mat[0].length];

    // 统一补成一个三角形的好处: 不必考虑长款
    // 补充成的三角形的边长
    const k = m + n - 1;

    // 是否进行反转
    let flag = false;
    // i表示对角线上的每一行, j表示列号, 只需要按照逐行进行遍历即可
    for (let i = 0; i < k; i++) {
        const tmp = [];
        // 正对角线上的规律, x和y轴的和等于行数
        for (let j = 0; j <= i; j++) {
            if (!mat[i - j] || mat[i - j][j] === undefined) continue;
            if (flag) {
                tmp.unshift(mat[i - j][j]);
            } else {
                tmp.push(mat[i - j][j]);
            }
        }
        res.push(...tmp);
        flag = !flag;
    }
    return res;
};
// @lc code=end

