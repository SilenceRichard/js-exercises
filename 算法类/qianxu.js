/**
 * 前序遍历
 *    1
 *  2   3
 * 4 5   6
 * 
 * 1 2 4 5 3 6
 */
function qianxu(root) {
  const stack = [root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}