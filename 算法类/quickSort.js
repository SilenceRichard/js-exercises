/**
 * 4 1 5 2 3
 * 
 * pivot i lt
 * 4     1 0
 *  
 * 1 < 4 lt++ swap(1, 1)
 * 4 1 5 2 3
 * 5 > 4
 * 2 < 4 lt++ swap(2, 3) 
 * 4 1 2 5 3
 * 3 < 4 lt++ swap(3, 4)
 * 4 1 2 3 5
 * swap(lt, pivot) 3 1 2 4 5
 * return lt
 */
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
function partition(nums, left, right) {
  const pivot = left;
  let lt = left;
  for (let i = left; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      lt++;
      swap(nums, lt, i);
    }
  }
  swap(nums, lt, pivot);
  return lt;
}
function quickSort(nums, left, right) {
  if (left >= right) {
    return;
  }
  const p = partition(nums, left, right);
  quickSort(nums, left, p - 1);
  quickSort(nums, p + 1, right)
}

const nums = [4, 1, 5, 2, 3, 7, 9];

quickSort(nums, 0, nums.length - 1);

console.log(nums);