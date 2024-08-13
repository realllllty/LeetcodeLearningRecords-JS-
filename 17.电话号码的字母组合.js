/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let res = [];

  let digitMap = {
    '2' : ['a', 'b', 'c'],
    '3' : ['d', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : ['j', 'k', 'l'],
    '6' : ['m', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z']
  } 
  
  let digitArr = digits.split('');
  if (!digitArr.length) return [];

  function combDigit(arr, comb) {
    
    // 递归出口, 数组长度为0
    if (!arr.length) {
      res.push(comb.join(''));
      return;
    }

    let num = arr[0];
    let subArr = arr.slice(1);

    // 对每个map中的进行一次递归
    digitMap[num].map(item => {
      let subComb = comb.slice();
      subComb.push(item);
      combDigit(subArr, subComb);
    })
  }

  combDigit(digitArr, []);

  return res;

  // 如果combDigit传入的是数组的下标而非数组本身, 是否能够减少内存消耗?
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end