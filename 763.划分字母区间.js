/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let res = [];
    // 从当前索引往后面看, 最多支持多少个字母不和后面产生重复
    let arr = s.split('');
    let cur = 0; // cur 为当前分段的开始节点
    // 存储这个区间的字母
    let abArea = [];

    for (let i=cur; i < arr.length; i++) {
        // 开始划分下一个区间, 这个区间的字母不能够和后面的重复, 并且保证区间尽可能的小
        abArea.push(arr[i]);

        // 切区间的条件, 后面没有出现abArea内的字母所对应的相同的字母就马上切
            let compare = arr.slice(i + 1);
            // 是否有相同的字母
            let compareResult = false;

            abArea.forEach((own) => {
                if(compare.findIndex(item => item === own) >= 0) compareResult = true;
            })
            if (!compareResult || i === arr.length - 1) {
                // 切区间
                let length = i - cur + 1;
                res.push(length);
                cur = i + 1;
                abArea = [];
            }
    }
    return res;
    // 问题:
    //     1. 对slice的使用不熟悉, end是闭区间
    //     2. for...in的理解不熟悉, 条件写成了长度-1
    //     3. 时间复杂度和空间复杂度都太长, 在同一个区间当中, 可以用变量记录区间字母的最远index, 可以用对象减少遍历次数
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = partitionLabels;
// @after-stub-for-debug-end