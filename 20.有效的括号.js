/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. 使用switch…case结构的情况下一定需要注意break的使用, 如果不主动使用break, 后续的case代码会继续执行
    // 2. 使用Array.prototype.map或者是forEach需要注意内部return值, 不再是针对外层函数的return了
    let stack = [];
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            switch (item) {
                case '(' : 
                    stack.unshift('(');
                    break;
                case ')':
                    if (stack[0] !== '(') return false;
                    stack.shift();
                    break;
                case '{':
                    stack.unshift('{');   
                    break;
                case '}':     
                    if (stack[0] !== '{') return false;
                    stack.shift();
                    break;
                case '[': 
                    stack.unshift('['); 
                    break; 
                case ']':   
                    if (stack[0] !== '[') return false;
                    stack.shift();
                    break;
            }
    }
    if (stack.length) return false;
    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end