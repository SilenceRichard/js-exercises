/**
 * 解题模板
*/
function minWindow(s) {
  /**
   * 定义搜索区间[left, right], 起始位置为[0, 0]
   */
  let left = 0;
  let right = 0;
  const sLen = s.length;
  while (right < sLen) {
    if (在右移的过程中检测是否满足条件) {
      // 对状态做修改，好让程序在后面检测到满足条件
    }
    right ++;
    while (满足条件) {
      // 走到这儿是满足条件的，左边届逐渐左移，可以取最小值
      if (在左移的过程中检测不满足条件) {
        // 对状态做修改，好让程序在后面检测到不满足条件
      }
      left ++;
    }
    // 走到这是不满足条件的，右边界逐渐右移，可以取最大值
  }
  return 需要的结果变量;
}




