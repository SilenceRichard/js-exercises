/**
 * 插入排序
 * 对于一个已排好序的数组，进行insert
 * 4, 6, 8   5
 * 
 * eg: 5,4,2,3,6,8
 * 
 * 1. 找到哨兵结点2 swap 2, 4, 5, 3, 6, 8
 * 2. i = 1 i<len;
 *   j = i;            2  2  4
 *   temp = nums[i]
 *   while(temp < nums[j - 1]) {
 *    nums[j] = nums[j - 1];
 *    j--
 *  }
 *  swap(j,i)
 */
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function insertSort(nums) {
  let min = nums[0];
  let minIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
  }
  swap(nums, 0, minIndex);
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i]
    let j = i;
    while (temp < nums[j - 1]) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
}

const arr = [8, 5, 4, 3, 2, 6, 1, 7];

insertSort(arr);

console.log(arr);
