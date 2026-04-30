// solve me
var longestCommonPrefix = function (strs) {
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== c) {
        c = "";
        break;
      }
    }
    if (c == "") break;
    else result += c;
  }
  return result;
};

// another solve
var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      // i >= strs[j].length if access char is not found or not
      if (i >= strs[j].length || strs[j][i] !== c) {
        return result;
      }
    }

    result += c;
  }

  return result;
};
