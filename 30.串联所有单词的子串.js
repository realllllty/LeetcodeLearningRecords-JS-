/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function(s, words) {
//     // 创建原始words对应map
//     let origin = {};
//     for (let key in words) {
//         origin[words[key]] = 1;
//     }
//     // 使用的count
//     let count = JSON.parse(JSON.stringify(origin));
//     let sArr = s.split('');
//     // 窗口下标从0开始dd
//     let index = 0;
//     // 达标指标, 当等于words.length的时候达标
//     let indicator = 0; 
//     let wordLen = words[0].length
//     while (index <= sArr.length - wordLen) {
//         let str = [sArr[index], sArr[index+1], sArr[index+2]].join('');
//         if (str in count && count[str] >= 1) {
//             // 是一个满足要求的字符串
//             count[str]--;
//             index += wordLen;

//         } else {
//             // 还原count
//             count = JSON.parse(JSON.stringify(origin));
//             index++;
//         }
//     }
// };
function findSubstring(s, words) {
    const wordLen = words[0].length;  // 每个单词的长度
    const numWords = words.length;    // words 中单词的数量
    const windowLen = wordLen * numWords; // 窗口的大小
    const sLen = s.length;

    // 创建 wordsMap 来存储 words 中每个单词的出现次数
    const wordsMap = {};
    for (let word of words) {
        wordsMap[word] = (wordsMap[word] || 0) + 1;
    }

    const result = [];

    // 滑动窗口的起始点在 [0, wordLen) 内，分别处理
    for (let i = 0; i < wordLen; i++) {
        let left = i, right = i;
        let currentMap = {};
        let wordCount = 0;

        while (right + wordLen <= sLen) {
            const word = s.substring(right, right + wordLen);  // 从右边提取一个单词
            right += wordLen;  // 右边界往右移动 wordLen

            if (wordsMap[word]) {
                currentMap[word] = (currentMap[word] || 0) + 1;
                wordCount++;

                // 如果当前单词次数过多，缩小窗口
                while (currentMap[word] > wordsMap[word]) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentMap[leftWord]--;
                    wordCount--;
                    left += wordLen;  // 左边界右移
                }

                // 如果窗口内包含了所有单词，记录起始位置
                if (wordCount === numWords) {
                    result.push(left);
                }
            } else {
                // 如果当前单词不在 words 中，直接重置窗口
                currentMap = {};
                wordCount = 0;
                left = right;
            }
        }
    }

    return result;
}
// @lc code=end

