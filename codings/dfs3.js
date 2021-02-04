/**
 *        1
 *     2     3
 *   4  5   7  6
 *  8
 * 
 * stack = [] node = 1 prev = null
 * [1]
 * [1, 2]
 * [1, 2, 4]
 * [1, 2, 4, 8]
 * 
 * !8.right pop 8
 * [1, 2 ,4]
 * !4.right pop 4
 * [1, 2]
 * [1, 2, 5] 2.right prev = 5
 * !5.right pop 5
 * [1, 2]
 * pop 2
 * [1]
 * 1.right
 * [1, 3] node = 3
 * [1, 3, 7]
 * pop 7
 * [1, 3]
 * [1, 3, 6]
 * pop 6
 * pop 3
 * pop 1
 * 8, 4 ,5, 2 ,7 ,6 ,3 ,1
 * @param {*} node 
 */
function postOrderTraversal(node) {
  const stack = [];
  const result = [];
  let prev = null;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const n = stack.pop();
      if (!n.right || prev === n.right) {
        result.push(n.val);
        prev = n;
        node = null;
      } else {
        stack.push(n);
        stack.push(n.right);
        node = n.right.left;
      }
    }
  }
}