/**
 * 1432219 k=3
 * [1]
 * [1, 4]
 * [1, 3] (4 > 3 pop k = 2)
 * [1, 2] (3 > 2 pop k = 1)
 * [1, 2] (2 = 2 pop k = 0)
 * [1,2 , 1 ,9]
 */

function removeKidgits(num, k) {
  const stack = [];
  const len = num.length - k;
  let result = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] < stack[stack.length - 1] && k > 0 && stack.length) {
      stack.pop();
      stack.push(num[i]);
    } else {
      stack.push(num[i]);
    }
  }
  for (let i = 0; i < len; i++) {
    if (!result && stack[i] !== '0') {
      result += stack[i]
    } else {
      result += stack[i]
    }
  }
  if (!result) {
    return '0';
  }
  return result;
}

const num = '1432219';
const k = 3;

console.log(removeKidgits(num, k));

