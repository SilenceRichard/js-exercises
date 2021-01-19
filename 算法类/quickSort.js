/**
 * 4 1 5 2 3
 */
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
function partition(nums, left, right) {
  const pivot = nums[left];
  let lt = left;
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < pivot) {
      lt++;
      swap(nums, i, lt);
    }
  }
  swap(nums, left, lt);
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