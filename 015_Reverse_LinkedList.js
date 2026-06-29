
var reverseList = function (head) {
  if (!head || !head.next) return head;

  let current = head;
  let next = head;
  let pre = null;

  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};

