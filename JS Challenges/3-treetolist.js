const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];
function convert(data) {
  let list = [];
  const recerse = (tree) => {
    tree.forEach((element) => {
      if (element.children) {
        recerse(element.children);
        delete element.children;
      }
      list.push(element);
    });
  };
  recerse(data);
  return list;
}
let res = convert(data);
console.log(res);
