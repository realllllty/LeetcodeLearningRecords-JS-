const test = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

// idea: 遍历children数组循环, 对每一个child再次执行循环直到child没有children对象
function render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历attrs数组为vnode添加属性
    for (let item of vnode.attrs) {
      dom.setAttribute(item, vnode.attrs[item]);
    }
  }
  attrs.children.forEach((element) => {
    dom.appendChild(render(element));
  });
  return dom;
}

render(test);
