function backTravel(root) {
  let node = root;
  let prev = null;
  const stack = [];
  const result = [];
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      // 如果没有右子树，或右子树刚刚被访问
      if (!node.right || prev === node.right) {
        result.push(node.val);
        prev = node;
        node = null;
      } else {
        // 存在右子树且未被访问
        stack.push(node);
        stack.push(node.right);
        node = node.right.left;
      }
    }
  }
  return result;
}