/**
 * 4 3 6 5 7 8 1
 * 
 * 4 3 6 | 5 7 8 1
 * 
 * 4 | 3 6   5 7 | 8 1
 * 
 * 4 | 3 | 6  5 | 7 | 8 | 1
 * 
 * merge
 * 
 * 3 4 6 | 1 5 7 8
 * 
 * copy temp = [3, 4, 6, 1, 5, 7, 8] (length = right - left + 1)
 * 
 * i = 0 (left) mid = 3 j= mid + 1
 * 
 * i 的 范围 0 - mid (边界 mid + 1)
 * j 的 范围 mid + 1 - len -1 （边界 len)
 * 
 */
function merge(nums, left, mid, right) {
  const temp = [];
  const len = right - left + 1;
  for (let i = left; i <= right; i++) {
    temp.push(nums[i]);
  }
  let i = 0;
  let j = mid -left +  1;
  for (let k = 0; k < len; k++) {
    if (i === mid -left + 1) {
      nums[left + k] = temp[j];
      j++
    } else if (j === len) {
      nums[left + k] = temp[i];
      i++
    } else if (temp[i] <= temp[j]) {
      nums[left + k] = temp[i];
      i++;
    } else { 
      nums[left + k] = temp[j];
      j++;
    }
  }
}

function mergeSort(nums, left, right) {
  if (left === right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right)
  merge(nums, left, mid, right);
}

const nums = [4, 3, 6, 5, 7, 8, 1]

mergeSort(nums, 0, nums.length - 1);

console.log(nums);