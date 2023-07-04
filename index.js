
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
  insertValueAtIndex(value,index) {
    if(index<= 0 ) {
      return "index is not present!";
    }
    const node = new Node(value);
    if(index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
    }else {
      let count = 0;
      let prev = this.head;
      while(prev && prev.next && count < index-1) {
        prev = prev.next;
        count++;
      }
      if(prev.next) {
        node.next = prev.next;
        prev.next = node;
        this.size++;
        return node;
      }
      return "index not found";
    }
  }
  removeNodeFromGivenIndex(index) {
    if(index<0) return "index less than 0";
    if(index == 0) {
      if(this.head) {
        this.head = this.head.next;
        this.size--;
      return "null";
      }
      else return 'head is null';
    }else {
      let prev = this.head;
      for(let i = 0; i< index-1; i++) {
        if(!prev.next) return '404 not found!'
        prev= prev.next;
      }
      let rmNode = prev.next;
      prev.next = rmNode.next
      this.size--;
      return rmNode;
    }
  }
  reverse() {
    if(!this.head) return null;
    let prev = null;
    let curr = this.head;
    while(curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
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

// Insert A Node at a given index in the List :-
const insertNodeAtIndex = new LinkedList();
console.log("insert 25 at 2 index");
insertNodeAtIndex.appendNodeLast(10);
insertNodeAtIndex.appendNodeLast(20);
insertNodeAtIndex.appendNodeLast(30);
insertNodeAtIndex.appendNodeLast(40);
insertNodeAtIndex.appendNodeLast(50);
insertNodeAtIndex.appendNodeLast(60);
console.log(insertNodeAtIndex.insertValueAtIndex(25,2));
insertNodeAtIndex.getValue();
console.log("size of insertNodeAtIndex ",insertNodeAtIndex.getSize())

// Remove A Node at a given Index in the list :-
console.log(insertNodeAtIndex.removeNodeFromGivenIndex(-1));
console.log(insertNodeAtIndex.removeNodeFromGivenIndex(0));
console.log(insertNodeAtIndex.removeNodeFromGivenIndex(7));
console.log(insertNodeAtIndex.removeNodeFromGivenIndex(1));
insertNodeAtIndex.getValue();
console.log("reversing")
// reverse
insertNodeAtIndex.reverse();
insertNodeAtIndex.getValue()