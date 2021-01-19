/**
 *        1
 *     2     3
 *   4     5   6
 * 7
 * 
 * 7 4 2 1 5 3 6
 */
function zhongxu(root) {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    result.push(node.val);
    root = node.right;
  }
}