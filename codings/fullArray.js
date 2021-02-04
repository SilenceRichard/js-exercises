/**
 *  1 2 3
 *    []
 *  1      2       3
 * 2 3    1 3    1   2
 *3   2  3   1  2     1
 */

function dfs(nums, index, path, used, res) {
  if (nums.length === index) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[nums[i]]) {
      continue;
    }
    path.push(nums[i]);
    used[nums[i]] = true;
    dfs(nums, index + 1, path, used, res);
    used[nums[i]] = false;
    path.pop();
  }
}

function fullArray(nums) {
  if (nums.length === 0) {
    return [];
  }
  const path = [];
  const used = [];
  const res = [];
  dfs(nums, 0, path, used, res);
  console.log(res)
}

fullArray([1,2,3])