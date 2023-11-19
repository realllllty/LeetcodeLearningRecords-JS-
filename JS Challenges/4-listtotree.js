let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];
function getTreeList(rootList, id, list) {
  for (const item of rootList) {
    if (item.parent === id) {
      list.push(item);
    }
  }
  for (const i of list) {
    i.children = [];
    getTreeList(rootList, i.id, i.children);
    if (i.children.length === 0) {
      delete i.children;
    }
  }
  return list;
}
const res = getTreeList(rootList, null, []);
console.log("res", res);
