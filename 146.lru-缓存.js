/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// var LRUCache = function (capacity) {
//     // 通过哈希表实现元素的快速查找, 通过链表实现顺序的控制
//     this.length = capacity;

//     // 定义表头和表尾
//     this.head = {};
//     this.tail = {};

//     // 链接头尾节点
//     this.head.next = this.tail;
//     this.tail.last = this.head;

//     this.hashMap = new Map();
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//     // 哈希表当中查找node
//     let node = this.hashMap.get(key);

//     // 返回值
//     if (node) {
//         // 从原位放到node head
//         node.last.next = node.next;
//         node.next.last = node.last;

//         this.head.next.last = node;
//         node.next = this.head.next;
//         this.head.next = node;
//         node.last = this.head;
//         return node.val;
//     } else {
//         return null;
//     }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//     // 更新双向链表中的内容, 从头部进行插入
//     let node = {
//         next: null,
//         last: null,
//         val: value
//     }

//     node.next = this.head.next;
//     node.last = this.head;
//     this.head.next = node;

//     // 更新哈希表中的内容, 哈希表中的 value 是链表中的node的引用
//     this.hashMap.set(key, node);

//     // 如果容量已满, 需要逐出尾结点
//     if (!this.capacity) {
//         this.tail.last.last.next = this.tail;
//         this.tail.last = this.tail.last.last;
//     } else {
//         this.capacity--;
//     }
// };

// 通过Map.keys() 返回一个可迭代对象, 这个可迭代对象实现了一个next()方法
// 返回value 和 done 对象, 相当于通过这个可迭代对象变相实现了类似链表的顺序访问能力

var LRUCache = function (capacity) {
    this.cap = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    // 将 key 变为最近使用
    this.makeRecently(key);
    return this.cache.get(key);
};

LRUCache.prototype.put = function (key, val) {
    if (this.cache.has(key)) {
        // 修改 key 的值
        this.cache.set(key, val);
        // 将 key 变为最近使用
        this.makeRecently(key);
        return;
    }

    if (this.cache.size >= this.cap) {
        // 链表头部就是最久未使用的 key
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
    // 将新的 key 添加链表尾部
    this.cache.set(key, val);
};

LRUCache.prototype.makeRecently = function (key) {
    const val = this.cache.get(key);
    // 删除 key，重新插入到队尾
    this.cache.delete(key);
    this.cache.set(key, val);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

