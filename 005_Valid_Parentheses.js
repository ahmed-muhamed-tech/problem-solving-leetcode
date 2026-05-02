const map = {
  ")": "(",
  "]": "[",
  "}": "{",
};

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") stack.push(char);
    else {
      if (stack.length == 0 || map[char] !== stack[stack.length - 1]) return false; 
      stack.pop();
    }
  }
  return !stack.length;
};

console.log(isValid("()"));
