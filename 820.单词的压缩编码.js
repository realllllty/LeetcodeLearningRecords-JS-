/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  // 最小注记字符串
  // 通过字符串数组构造集
  // Set对象只会存储唯一值, 因此words数组当中有重复的单词, 也只会在hashSet当中存储一次
  let hashSet = new Set(words);
  for (let item of hashSet) {
    for (let i = 1; i < item.length; i++) {
      // 看词尾是否出现在了haseSet当中, 如果出现了就进行删除操作
      // 因为如果出现了, 说明这个单词是另一个单词的后缀, 那么就不需要存储这个单词
      let target = item.slice(i);
      hashSet.has(target) && hashSet.delete(target);
    }
  }
  let result = 0;
  // 根据hashSet 中剩余元素计算结果长度
  // 遍历hashSet当中的每一个单词, 并且长度加上1, 因为每个单词都需要按照#进行结尾
  hashSet.forEach((item) => (result += item.length + 1));
  return result;
};
// @lc code=end
