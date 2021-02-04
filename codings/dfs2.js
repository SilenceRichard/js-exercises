/**
 * 中序遍历
 *       1
 *    2    3
 *  4  5    7
 * 6          8
 * [] 1
 * [1] 2
 * [1, 2] 4
 * [1, 2, 4] 6
 * [1, 2, 4, 6]
 * pop 6          used[6]
 * [1, 2 ,4]
 * pop 4
 * [1, 2]
 * pop 2 5
 * [1, 5]
 * pop 5
 * [1]
 * pop 1
 * [3]
 * [7]
 * [8]
 */
function inOrderTravel(node) {
  const stack = [];
  const result = [];
  while (node || stack.length) {
    while (node.left) {
      stack.push(node);
      node = node.left;
    }
    const p = stack.pop();
    result.push(p.val);
    node = node.right;
  }
}