/**
 * 在排序数组中查找元素的第一个和最后一个位置
 */
const arr = [5, 7, 7, 8, 8, 8, 10];
const target = 8;

function searchRange(nums, target) {
  if (nums.length === 0) {
    return [-1, -1]
  }
  function searchStart(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // 
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        // nums[mid] >= target 往前搜索
        if (nums[mid] === target) {
          res = mid;
        }
        right = mid - 1;
      }
    }
    return res;
  }
  function searchEnd(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        // <= 向后搜索
        left = mid + 1;
        if (nums[mid] === target) {
          res = mid;
        }
      }
    }
    return res;
  }
  const start = searchStart(nums);
  const end = searchEnd(nums);
  return {
    start,
    end
  }
}

console.log(searchRange(arr, target));