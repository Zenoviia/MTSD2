class LinkedList {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  length() {
    if (this.size === 0) {
      return 0;
    } else {
      return this.size;
    }
  }

  append(value) {
    this.list.push(value);
    this.size++;
  }

  printList() {
    console.log("List:", this.list);
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.printList();

console.log("List length:", list.length());
