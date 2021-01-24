/**
 * 全排列问题
 */
function dfs(nums, index, path, used, res) {
  if (nums.length === index) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = 0; i<nums.length; i ++) {
    if (used[i]) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, index + 1, path, used, res);
    path.pop();
    used[i] = false;
  }
}
function fullArray(nums) {
  if (nums.length === 0) {
    return []
  }
  const res = [];
  const path = [];
  const used = [];
  dfs(nums, 0, path, used, res);
  return res;
}

const arr = [1,2,3,4]

console.log(fullArray(arr))