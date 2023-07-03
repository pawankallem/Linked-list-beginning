
// 1. Make a Node 

class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

// 2. Create Linked List

class LinkedList {
  constructor() {
    this.head = null,
      this.size = 0
  }
  isEmpty() {
    if (this.size === 0) return true;
  }
  getSize() {
    return this.size;
  }
  insertNode(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  getValue() {
    let curr = this.head;
    while (curr) {
      console.log("values : ", curr.value);
      curr = curr.next;
    }
  }
}

// create a New List and pass the values and test
const list = new LinkedList();
console.log("is Empty? ", list.isEmpty());
console.log("What is Size? ", list.getSize());
list.insertNode(10);
list.insertNode(20);
list.insertNode(30);
list.getValue()
console.log("What is Size? ", list.getSize());