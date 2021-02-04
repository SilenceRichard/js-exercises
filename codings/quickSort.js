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
      swap(nums, i, lt);
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
  quickSort(nums, p + 1, right);
}

const arr = [8, 5, 3, 2, 1, 9, 4]

quickSort(arr, 0, arr.length - 1)

console.log(arr)