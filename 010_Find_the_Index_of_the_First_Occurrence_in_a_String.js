// my solve
var strStr = function (haystack, needle) {
  if (haystack === needle) return 0;
  let endOfIndex = haystack.length - needle.length;
  for (let i = 0; i <= endOfIndex; i++) {
    let word = "";
    for (let j = i; j < i + needle.length; j++) word += haystack[j];
    if (needle === word) return i;
  }

  return -1;
};

// solve chatGPT
var strStr = function (haystack, needle) {
  let end = haystack.length - needle.length;

  for (let i = 0; i <= end; i++) {
    let j = 0;

    while (j < needle.length && haystack[i + j] === needle[j]) j++;

    if (j === needle.length) return i;
  }

  return -1;
};
