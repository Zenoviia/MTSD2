class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }

    this.size++;
  }

  length() {
    return this.size;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
      }
    } else if (index === this.size) {
      this.append(value);
      return;
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
    }

    this.size++;
  }

  printList() {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let result = [];
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result);
  }
}

const list = new CircularLinkedList();

list.append(1);
list.append(2);
list.append("a");
list.append("b");
list.append(1);
list.append(2);
list.append("c");
list.append(2);
list.append("a");

console.log("Original list (after append):");
list.printList();
console.log("List length after append operation:", list.length());

list.insert(7, 2);
list.insert("b", 8);
list.insert(7, -2);
list.insert("b", 12);

console.log("Original list (after insert):");
list.printList();
console.log("List length after insert operation:", list.length());

module.exports = CircularLinkedList;
