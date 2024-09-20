/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var maxVowels = function (s, k) {
//     // 又要重新开始刷题了kkk
//     // 形成一个长度为k的窗口
//     let res = 0;
//     let strArr = s.split('');
//     let len = strArr.length;
//     // 针对
//     if (k >= len) {
//         let j = 0;
//         let acc = 0;
//         while (j < len) {
//             let str = s[j];
//             switch (str) {
//                 case 'a':
//                     acc++;
//                     break;
//                 case 'e':
//                     acc++;
//                     break;
//                 case 'i':
//                     acc++;
//                     break;
//                 case 'o':
//                     acc++;
//                     break;
//                 case 'u':
//                     acc++;
//                     break;
//             }
//             j++;
//         }
//         return acc;
//     }
//     for (let i = 0; i < len; i++) {
//         // 内层停止增加的条件: i + k = len 或者是 k >= len
//         let j = i;
//         let acc = 0;
//         // 这个应该是外层的停止条件啊
//         while (j + k <= len) {
//             let str = s[j];
//             switch (str) {
//                 case 'a':
//                     acc++;
//                     break;
//                 case 'e':
//                     acc++;
//                     break;
//                 case 'i':
//                     acc++;
//                     break;
//                 case 'o':
//                     acc++;
//                     break;
//                 case 'u':
//                     acc++;
//                     break;
//             }
//             j++;
//         }
//         res = Math.max(res, acc);
//         // 如果元音数量等于窗口长度, 直接返回
//         if (res === k) {
//             return res;
//         }
//     }
//     return res;
// };

// 相较于上面的想法优化的点
// 1. 使用了这个Set, 相较于switch case的写法简单太多了
// 2. 滑动窗口的时候只需要判断一头一尾, 相较于上面子循环还需要遍历一遍窗口的形式复杂度降低太多(特别是针对窗口较大的情况)
var maxVowels = function (s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let res = 0, acc = 0;

    // 初始化第一个窗口
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            acc++;
        }
    }
    res = acc;

    // 滑动窗口
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) acc++;
        if (vowels.has(s[i - k])) acc--;
        res = Math.max(res, acc);
    }

    return res;
};

// @lc code=end

