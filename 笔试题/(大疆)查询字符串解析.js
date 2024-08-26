// 大疆笔试题

class URLSearchParams {
    constructor(init) {
        this.storage = [];
        if (typeof init === "object") {
            // 把 [key, value] 写成 (key, value)了...
            for (let [key, value] of Object.entries(init)) {
                this.storage.push({ [key]: value });
            }
        } else if (typeof init === "string") {
            this.storage = init.split("&").map(item => {
                // 写法优化, 数组解构赋值, 对象key的变量写法
                const [key, value] = item.split("=");
                return { [key]: value };
            });
        }
    }

    append(key, value) {
        this.storage.push({ [key]: value });
    }

    set(key, value) {
        // let index = this.storage.findIndex(item => Object.keys(item)[0] === key);
        // 用in明显更方便, 有点傻了
        const item = this.storage.find(item => key in item);
        this.storage[index][key] = value;
    }

    get(key) {
        let index = this.storage.findIndex(item => Object.keys(item)[0] === key);
        return this.storage[index][key];
    }

    getAll(key) {
        // let res = [];
        // this.storage.forEach(item => {
        //     if (Object.keys(item)[0] === key) res.push(item[key]);
        // })
        // return res;
        return this.storage
                    .filter(item => key in item)
                    .map(item => item[key]);
    }

    toString() {
        // let resArr = [];
        // this.storage.forEach(item => {
        //     for (let [ key, value ] of Object.entries(item)) {
        //         let sItem = `${key}=${value}`;
        //         resArr.push(sItem);
        //     }
        // })
        // let res = `?${resArr.join("&")}`;
        // return res;
        return '?' + this.storage
            .map(item => {
                const key = Object.keys(item)[0];
                return `${key}=${item[key]}`;
            })
            .join("&");
    }

    // 返回的是一个对象, 这个对象包括了next函数, 并不是直接返回了next
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.storage.length) {
                    const value = this.storage[index][Object.keys(this.storage[index])[0]];
                    index++;
                    return { value, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}


const params1 = new URLSearchParams({ foo: 'bar' });
console.log(params1.toString());
