var longestCommonPrefix = function (strs) {
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== c) 
        return result;
    }
    result += c;
  }
  return result;
};

