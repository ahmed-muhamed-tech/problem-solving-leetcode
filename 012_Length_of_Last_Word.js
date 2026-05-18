var lengthOfLastWord = function (s) {
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && result) break;
    if (s[i] !== " ") result++;
  }
  return result;
};