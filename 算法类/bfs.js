/**
 * 广度搜索
 *     1
 *   2   3
 * 4  5   6
 * 
 * queue = [1]
 * 1 出 ， queue = [2, 3]
 * 2 出 ， queue = [3, 4, 5]
 * 3 出 ,  queue = [4, 5, 6]
 * 4
 * 5
 * 6 
 */
function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

/**
 * 层序遍历
 */
function bfs2(root) {
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
}