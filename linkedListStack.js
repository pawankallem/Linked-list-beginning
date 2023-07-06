const LinkedList = require("./index.js");

class StackLinkedList {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.insertNode(value);
  }
  pop() {
   this.list.removeNodeFromFront()
  }
  peek() {
    this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  getValue() {
    this.list.getValue();
  }
}

const linkedListStack = new StackLinkedList();

console.log(linkedListStack.isEmpty())
linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);
console.log(linkedListStack.getSize());
console.log(linkedListStack.getValue());
console.log(linkedListStack.pop());
// console.log(linkedListStack.peek());
console.log(linkedListStack.getSize());
console.log(linkedListStack.getValue());
