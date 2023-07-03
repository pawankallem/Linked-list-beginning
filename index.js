
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

// Insert Node at Beginning :-
const insertNodeBeginning = new LinkedList();
insertNodeBeginning.insertNode(10);
insertNodeBeginning.insertNode(20);
insertNodeBeginning.insertNode(30);
insertNodeBeginning.getValue()
console.log("What is Size? ", insertNodeBeginning.getSize());

// Append Node at Last :-
const addNodeAtLast = new LinkedList();
addNodeAtLast.appendNodeLast(10);
addNodeAtLast.appendNodeLast(20);
addNodeAtLast.appendNodeLast(30);
addNodeAtLast.getValue()
console.log("What is Size? ", addNodeAtLast.getSize());
