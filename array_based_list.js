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

  add(value) {
    this.list.push(value);
    this.size++;
  }

  printList() {
    console.log("List:", this.list);
  }
}

const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);

list.printList();

console.log("List length:", list.length());
