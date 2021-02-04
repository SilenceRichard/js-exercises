/**
 * 反转链表
 * 1 -> 2 -> 3 -> 4 -> 5 -> null
 * 
 * 5 -> 4 -> 3 -> 2 -> 1 -> null
 * 
 * 
 * pre cur next
 * null 1   2
 * 
 * pre     cur   next
 * null -> 1 -> 2
 * 
 * 2 -> 1 -> null
 * 
 * next = cur.next;
 * cur.next = pre;
 * pre = cur;
 * cur = next;
 * 
 *  
 *  
 */
function revertList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next  = prev;
    prev = current;
    current = next;
  }
  return prev;
}
