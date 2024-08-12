// 写一个发布订阅模式
// 发布: 对于某个事件, 给予一定的数据
// 订阅: 关注某个事件, 当这个事件发生的时候, 能够执行特定的动作(给到的回调函数)

// 首先利用闭包创建一个函数

function pubsub() {
  let subscribers = {};

  function subscribe(event, callback) {
    if (!subscribers[event]) {
      subscribers[event] = [];
      subscribers[event].push(callback);
    } else {
      subscribers[event].push(callback)
    }
  }

  function publish(event, data) {
    if (subscribers[event]) {
      subscribers[event].forEach(item => item(data));
    }
  }

  return {
    subscribe,
    publish
  }
}

let pbInstance = pubsub();

pbInstance.subscribe('sayHello', (data) => console.log(`sayHello to ${data}`));

pbInstance.publish('sayHello', 'L');
pbInstance.publish('sayHello', 'L2');