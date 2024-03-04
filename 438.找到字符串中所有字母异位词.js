/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * 
 *  需要数据结构 --> 对于同样的值能够进行多份的存储
 *              ==> 非连续存储?
 */
// var findAnagrams = function (s, p) {
//   let res = [];
//   let store = new Map();
//   let arrTar = s.split('')
//   let arrOri = p.split('')
//   arrOri.forEach((item) => {
//     if (store.has(item)) {
//       store.set(item, store.get(item) + 1);
//     } else {
//       store.set(item, 1);
//     }
//   })

//   for (let i = 0; i < arrTar.length - arrOri.length + 1; i++) {
//     let judge = true
//     for (let j = i; j < i + arrOri.length; j++) {
//       if (store.has(arrTar[j]) && store.get(arrTar[j]) > 0) {
//         store.set(arrTar[j], store.get(arrTar[j]) - 1);
//       } else {
//         judge = false
//         break
//       }
//     }
//     if (judge) {
//       res.push(i)
//     }
//     store = new Map();
//     arrOri.forEach((item) => {
//       if (store.has(item)) {
//         store.set(item, store.get(item) + 1);
//       } else {
//         store.set(item, 1);
//       }
//     })
//   }
//   return res;
// }
var findAnagrams = function(s, p) {
  let res = [];
  let sLen = s.length, pLen = p.length;
  if (sLen < pLen) return res;

  let count = Array(26).fill(0); // 用于记录p中每个字母的出现次数以及s的滑动窗口中每个字母的出现次数
  // 初始化p中的字符频率和s的第一个窗口的字符频率
  for (let i = 0; i < pLen; i++) {
      count[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  // 如果count数组全为0，则说明第一个窗口就是一个异位词
  if (count.every(val => val === 0)) res.push(0);

  // 开始滑动窗口
  for (let i = pLen; i < sLen; i++) {
      // 窗口向右滑动，加入新字符，移除旧字符
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
      count[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]++;

      // 检查当前窗口是否满足条件
      if (count.every(val => val === 0)) {
          res.push(i - pLen + 1);
      }
  }

  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findAnagrams
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = findAnagrams
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = findAnagrams
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end