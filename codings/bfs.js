/**
 *      1
 *   2     3
 *  4 5   6  7
 * 8
 * 
 * queue
 * [1]
 * 1 shift
 * [2, 3]
 * 2 shift
 * [3, 4, 5]
 * 3 shift
 * [4, 5, 6, 7]
 * 4 shift
 * [5, 6, 7, 8]
 * @param {*} node 
 */
function bfs(node) {
  const queue = [node];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}