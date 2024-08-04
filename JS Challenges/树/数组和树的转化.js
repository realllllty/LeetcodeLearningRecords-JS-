let arr = [
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 1, name: '部门A', parentId: 2 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

function formTree(arr, parNode) {
  // never get enough
  // 利用数组和对象相互引用, 将id 作为key进行使用建立索引
  let obj = {};

  arr.map(i => obj[i.id] = i);

  // 遍历obj对象, 形成树形结构
  for (let [key, value] of Object.entries(obj)) {
    if (value.parentId === 0) {
      parNode.children.push(value);
    } else {
      if (obj[value.parentId].children) {
        obj[value.parentId].children.push(value);
      } else {
        obj[value.parentId].children = [];
        obj[value.parentId].children.push(value);
      }
    }
  }
}

let parNode = {
  id: 0,
  children: []
}

formTree(arr, parNode);

console.log(JSON.stringify(parNode));

