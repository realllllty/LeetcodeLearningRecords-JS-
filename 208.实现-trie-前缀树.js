/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.root = Object.create(null);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  // 遍历value
  // 一个一个看当前的字母在当前root下有没有对应的
  for (const c of word) {
    // 如果在这一层没有对应的字母(创建一个新的对象)
    // Object.create(null)用于创建一个干净的对象, 这个对象完全没有继承自Object,prototype的属性或者是方法, 因此不包含toString等默认存在于普通对象的方法
    // 通常被用于创建一个纯净的字典对象
    if (!node[c]) node[c] = Object.create(null);
    // node指向下一层
    node = node[c];
  }
  /**
   * 可能有两种情况
   * 1. 芝士一个前缀, 这种情况下能够正常返回node
   * 2. 不仅仅是前缀, 还被标记为一个完整的单词, node和node.isWord都为true
   */
  node.isWord = true;
};

// 用于查看是否有这个单词
Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (const c of word) {
    node = node[c];
    if (!node) return null;
  }
  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  return !!node && !!node.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return !!this.traverse(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

// @after-stub-for-debug-begin
module.exports = Trie;
// @after-stub-for-debug-end
