function findKthLargest(nums, k) {
  // 构建大小为k的小顶堆
  let heap = [];
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  buildMinHeap(heap);

  // 遍历剩余的元素
  for (let i = k; i < nums.length; i++) {
    // 如果k后面的数更加大了, 可以加入堆, 然后堆化
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      minHeapify(heap, 0, k);
    }
  }

  // 堆顶元素即为第k大的元素
  return heap[0];
}

// 构建小顶堆
function buildMinHeap(heap) {
  let n = heap.length;
  // 计算最后一个非叶子节点的索引
  // 叶子节点本身不需要被堆化, 因为叶子节点没有子节点, 它们本身已经满足堆的性质
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // 进行堆化
    minHeapify(heap, i, n);
  }
}

// 维护小顶堆的性质
function minHeapify(heap, i, heapSize) {
  let smallest = i;
  let l = 2 * i + 1; // 左子节点
  let r = 2 * i + 2; // 右子节点

  if (l < heapSize && heap[l] < heap[smallest]) {
    smallest = l;
  }
  if (r < heapSize && heap[r] < heap[smallest]) {
    smallest = r;
  }
  if (smallest !== i) {
    // 如果i对应的值没有比i对应子节点的值要小, 就需要进行向下交换
    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    // 判断交换后的子节点对应的子树进行堆化
    minHeapify(heap, smallest, heapSize);
  }
}

// 示例使用
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k)); // 输出第2大的数字
