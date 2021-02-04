/**
 * 前序遍历
 *      1
 *   2      3
 *  4 5    6  7
 * 8
 * 
 * stack
 * [1]
 * pop 1
 * [3, 2]
 * pop 2
 * [3, 5, 4]
 * pop 4
 * [3, 5, 8]
 * pop 8
 * [3, 5]
 * pop 5
 * [3]
 * pop 3
 * [7, 6]
 * pop 6
 * pop 7
 */
function dfs1(node) {
  const stack = [node];
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