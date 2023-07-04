
class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  appendNodeLast(value) {
    const node = new Node(value);
    if(!this.head) this.head = node;
    else {
      let prev = this.head;
      while(prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  reverse(value) {
    let prev = null;
    let curr = value;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  isPalindrome() {
    let slow = this.head;
    let fast = this.head;
    let start = this.head;
    let len = 0;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      len++;
    }
    let mid = this.reverse(slow);
    while(len) {
      len--;
      if(mid.value !== start.value) return false;
      mid = mid.next;
      start = start.next;
    }
    return true;
  }
  getValue() {
    let curr = this.head;
    while (curr) {
      console.log("values : ", curr.value);
      curr = curr.next;
    }
  }
}

const palindrom = new LinkedList();

palindrom.appendNodeLast(1);
palindrom.appendNodeLast(2);
palindrom.appendNodeLast(3);
palindrom.appendNodeLast(2);
palindrom.appendNodeLast(1);

palindrom.getValue();
console.log("is palindrom : ",palindrom.isPalindrome() )