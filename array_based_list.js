class LinkedList {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  getLength() {
    return this.size;
  }

  add(value) {
    this.list.push(value);
    this.size++;
  }

  printList() {
    console.log("List:", this.list);
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log("List after adding elements:");
list.printList();

console.log("List empty:", list.isEmpty());
console.log("List size after additions:", list.getSize());
console.log("List length after additions:", list.getLength());
