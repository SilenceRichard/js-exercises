/**
 * 4 2 3 1 5
*/
function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) { 
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
}

const nums = [4, 2, 3, 1, 5];
selectSort(nums);
console.log(nums)