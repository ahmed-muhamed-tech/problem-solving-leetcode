console.log("Leetcode")

// linked list

class Node {
  constructor(_value, _next = null) {
    ((this.value = _value), (this.next = _next));
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first
  insertFirst(_value) {
    this.head = new Node(_value, this.head);
    this.size++;
  }

  // insert end
  insertEnd(_value) {
    const newNode = new Node(_value, null);

    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // insert of index
  insertOfIndex(_index, _value) {
    if (_index < 0 || _index > this.size) return;

    if (_index === 0) {
      this.insertFirst(_value);
      return;
    }
    if (_index === this.size) {
      this.insertEnd(_value);
      return;
    }

    let currentIndex = 0;
    let current = this.head;
    while (currentIndex < _index - 1) {
      current = current.next;
      currentIndex++;
    }

    current.next = new Node(_value, current.next);
    this.size++;
  }

  // delete of index
  deleteAt(_index) {
    if (_index < 0 || _index > this.size) return;

    if (_index === 0) this.head = this.head.next;
    let count = 0;
    let current = this.head;
    let pre = current;

    while (count < _index) {
      pre = current;
      current = current.next;
      count++;
    }

    pre.next = current.next;
    this.size--;
  }

  // clear all data
  clear() {
    this.head = null;
    this.size = 0;
  }

  // print data
  printDataList() {
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value;
      if (current.next) result += "->";
      current = current.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
list.insertEnd(100);
list.deleteAt(2);

list.printDataList();