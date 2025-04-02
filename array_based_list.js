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

  insert(value, index) {
    if (index < 0) {
      console.log(
        `Invalid index "${index}" for insert. Should be positive number.`
      );
      return;
    }
    if (index > this.size) {
      console.log(
        `Invalid index "${index}" for insert. Should be less then list length (${this.size}).`
      );
      return;
    }

    this.list.splice(index, 0, value);
    this.size++;
  }

  delete(index) {
    if (index < 0) {
      console.log(
        `Invalid index "${index}" for removing. Should be positive number.`
      );
      return;
    }
    if (index > this.size) {
      console.log(
        `Invalid index "${index}" for removing. Should be less then list length (${this.size}).`
      );
      return;
    }

    this.list.splice(index, 1);
    this.size--;
  }

  deleteAll(value) {
    let index = this.list.indexOf(value);

    while (index !== -1) {
      this.list.splice(index, 1);
      this.size--;
      index = this.list.indexOf(value);
    }
  }

  get(index) {
    if (index < 0) {
      console.log(
        `Invalid index "${index}" for getting element. Should be positive number.`
      );
      return null;
    }
    if (index >= this.size) {
      console.log(
        `Invalid index "${index}" for getting element. Should be less than list length (${this.size}).`
      );
      return null;
    }

    return this.list[index];
  }

  printList() {
    console.log("List:", this.list);
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(2);
list.append(4);
list.append(2);
list.append(2);

// list.insert(7, 2);
// list.insert(7, -2);
// list.insert(7, 8);

// list.delete(2);
// list.delete(-2);
// list.delete(10);

list.printList();
console.log("List length:", list.length());

// list.deleteAll(2);
// list.deleteAll(5);

console.log("Element at index 1:", list.get(0));

// list.printList();
// console.log("List length:", list.length());
