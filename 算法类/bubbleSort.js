/**
 * 冒泡排序
 * 4, 5, 2, 3, 1, 7
 * i j
 * 0 0 
 *   1
 *   2 swap 4, 2, 5, 3, 1 ,7
 *   3 swap 4, 2, 3, 5, 1 ,7
 *   4 swap 4, 2, 3, 1, 5, 7 j = i j 
 *   5
 */

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j + 1] < nums[j]) {
        const temp = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = temp;
      }
    }
  }
}

const nums = [4, 5, 2, 3, 1, 7];
bubbleSort(nums);
console.log(nums);