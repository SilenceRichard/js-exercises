function removeDuplicateLetters(s) {
  /**
   * cbacdcbc
   * 
   * [c]
   * [b]
   * [a]
   * [a, c]
   * [a, c ,d]
   * [a,c ,d ,b]
   * 
   * bcabc
   * [b]
   * [b, c]
   *  a 不在栈中
   *  a < c map[c] > 1 pop c
   *  a < b map[b] > 1 pop b
   */
  const letterMap = [];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (letterMap[s[i]]) {
      letterMap[s[i]] = letterMap[s[i]] + 1;
    } else {
      letterMap[s[i]] = 1;
    }
  }
  console.log(letterMap);
  for (let i = 0; i < s.length; i++) {
    if (!stack.find(l => l === s[i])) {
      while (s[i] < stack[stack.length - 1] && letterMap[stack[stack.length - 1]] > 0 && stack.length) {
        stack.pop();
        // letterMap[n]--;
      }
      stack.push(s[i]);
      letterMap[s[i]]--;
    } else {
      letterMap[s[i]]--;
    }
  }
  console.log(stack);
}

const s = 'cbacdcbc'

removeDuplicateLetters(s);