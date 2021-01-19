/**
 * 插入排序
 *
 * 3, 4, 2, 1, 5, 6
 *
 * // 循环一次，找到最小结点
 * 1, 4, 2, 3, 5, 6
 *
 * i j nums[i]
 * 1 1 4
 * 2 2 2
 *      nums[j-1] = 4 > 2
 *      => nums[j] = nums[j-1]
 *      1 4 4
 *      j=1  nums[0] < 2
 *      => nums[1] = 2
 *      1 2 4
 */

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function insertSort(nums) {
  // findMin
  let min = nums[0];
  let minIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
  }
  swap(nums, minIndex, 0);
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    const t = nums[i];
    while (nums[j - 1] > t) {
      nums[j] = nums[j - 1];
      j--
    }
    nums[j] = t;
  }
}

const nums = [3, 4, 2, 1, 5, 6];

insertSort(nums)

console.log(nums);