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
// 普通解法
// var minimumLengthEncoding = function (words) {
//   // 最小注记字符串
//   // 通过字符串数组构造集
//   // Set对象只会存储唯一值, 因此words数组当中有重复的单词, 也只会在hashSet当中存储一次
//   let hashSet = new Set(words);
//   for (let item of hashSet) {
//     for (let i = 1; i < item.length; i++) {
//       // 看词尾是否出现在了haseSet当中, 如果出现了就进行删除操作
//       // 因为如果出现了, 说明这个单词是另一个单词的后缀, 那么就不需要存储这个单词
//       let target = item.slice(i);
//       hashSet.has(target) && hashSet.delete(target);
//     }
//   }
//   let result = 0;
//   // 根据hashSet 中剩余元素计算结果长度
//   // 遍历hashSet当中的每一个单词, 并且长度加上1, 因为每个单词都需要按照#进行结尾
//   hashSet.forEach((item) => (result += item.length + 1));
//   return result;
// };

// Trie树解法
var minimumLengthEncoding = function (words) {
  // 构造Trie树的过程
  class Trie {
    constructor() {
      this.root = Object.create(null);
    }
    insert(word) {
      let node = this.root;
      for (let e = word.length - 1; e >= 0; e--) {
        const c = word[e];
        if (!node[c]) node[c] = Object.create(null);
        node = node[c];
      }
      // 只有当前node没有后续了才能够return对应的长度
      if (!Object.keys(node).length) {
        node.isWord = true;
        return word.length + 1;
      } else {
        node.isWord = true;
        return 0;
      }
    }
  }

  // 将words逐个插入Trie树的过程
  // 如果一个长的包含一个短的(后缀), 那么后面短的就应该不再插入了, 因此应该先长后短
  let len = 0;
  let trie = new Trie();
  // 对words进行排序操作
  words.sort((a, b) => {
    return b.length - a.length;
  });
  // 将单词插入到Trie树中
  for (word of words) {
    len += trie.insert(word);
  }
  return len;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minimumLengthEncoding;
// @after-stub-for-debug-end
