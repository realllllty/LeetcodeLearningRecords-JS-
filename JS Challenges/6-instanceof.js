/* 
感觉对于原型和原型链的理解还需要加强
这个题目可能需要抄一下了kkk 
*/

function myInstanceof(left, right) {
  //Object.getPrototypeOf() 静态方法返回指定对象的原型[[Prototype]]
  let proto = Object.getPrototypeOf(left), //获取原型的对象
    prototype = right.prototype; //获取构造函数的prototype对象

  //判断构造函数的prototype对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

function Person() {}
var p = new Person();
console.log(myInstanceof(p, Object));
