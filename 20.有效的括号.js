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