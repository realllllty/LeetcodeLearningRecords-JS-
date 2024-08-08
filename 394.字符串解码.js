/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // 使用双栈完成(一个用于存储字符, 一个用于存储倍数)
    let numStack = [];
    let strStack = [];
    let num = 0;
    let result = '';
    for (const char of s) {
        if (!isNaN(char)) {
            // 可能存在累计数字
            num = num * 10 + Number(char); // 计算出倍数
        } else if (char == '[') {
            // 可以将前面的数值累计和字符累计都存放在栈当中, 开始新的一轮累计
            strStack.push(result);
            result = '';
            numStack.push(num);
            num = 0;
        } else if (char == ']') {
            // 有了], 可以计算这个区间内部的str是什么
            let repeatTimes = numStack.pop();
            result = strStack.pop() + result.repeat(repeatTimes);
        } else {
            result += char; // 进行追加
        }
    }

    return result;
};
// @lc code=end

