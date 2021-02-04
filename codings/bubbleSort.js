/**
 * 冒泡排序
 * @param {*} nums 
 */
function bubbleSort(nums) {
  /**
   * 4, 5, 3, 1 ,2
   * i = 0 i< n - 1
   * j = i + 1; j <n
   *   nums[j] < nums[j - 1]
   *      swap
   * 
   * i j
   * 0 0
   *   1  4, 3, 5, 1 ,2
   *   2  4, 3, 1, 5, 2
   *   3  4, 3, 1, 2, 5
   *   4
   * 1 
   */
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j+ 1] < nums[j]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
}

const arr = [9, 4, 5, 3, 2, 1, 8]

bubbleSort(arr);

console.log(arr)