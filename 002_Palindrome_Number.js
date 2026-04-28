let reverse = (num) => {
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    result = result * 10 + temp;
    num = parseInt(num / 10);
  }
  return result;
};

var isPalindrome = function (x) {
    return reverse(x) === x;
};


// another problem

var isPalindrome = function (x) {
  const str = x.toString();
  if (str[0] == "-") return false;
  for (let start = 0; start < str.length / 2; start++) {
    let end = str.length - 1 - start;
    if (str[start] != str[end]) return false;
  }

  return true;
};
