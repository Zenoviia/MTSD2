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

  validateIndex(index) {
    if (index < 0) {
      console.log(`Invalid index "${index}". Should be positive number.`);
      return false;
    }
    if (index >= this.size) {
      console.log(
        `Invalid index "${index}". Should be less than list length (${this.size}).`
      );
      return false;
    }
    return true;
  }

  insert(value, index) {
    if (!this.validateIndex(index) && index !== this.size) return; // Перевірка індексу
    this.list.splice(index, 0, value);
    this.size++;
  }

  delete(index) {
    if (!this.validateIndex(index)) return; // Перевірка індексу
    this.list.splice(index, 1);
    this.size--;
  }

  deleteAll(value) {
    let index = this.list.indexOf(value);

    while (index !== -1) {
      this.list.splice(index, 1);
      this.size--;
    }
  }

  get(index) {
    if (!this.validateIndex(index)) return null; // Перевірка індексу
    return this.list[index];
  }

  clone() {
    const newList = new LinkedList();
    newList.list = [...this.list];
    newList.size = this.size;
    return newList;
  }

  reverse() {
    this.list.reverse();
  }

  findFirst(value) {
    const index = this.list.indexOf(value);
    if (index !== -1) {
      return index;
    } else {
      return -1;
    }
  }

  findLast(value) {
    const index = this.list.lastIndexOf(value);
    if (index !== -1) {
      return index;
    } else {
      return -1;
    }
  }

  clear() {
    this.list = [];
    this.size = 0;
  }

  extend(elements) {
    if (!Array.isArray(elements)) {
      console.log("Invalid input. Please provide an array.");
      return;
    }
    this.list = [...this.list, ...elements];
    this.size = this.list.length;
  }

  printList() {
    console.log(this.list);
  }
}

const list = new LinkedList();

console.log("List length befor adding anything:", list.length());

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

list.delete(2);
list.delete(-2);
list.delete(10);

console.log("List after delete operation:");
list.printList();
console.log("List length after delete operation:", list.length());

list.deleteAll(2);
list.deleteAll("b");
list.deleteAll(10);

console.log("List after deleteAll operation:");
list.printList();
console.log("List length after deleteAll operation:", list.length());

console.log("Element at index 0:", list.get(0));
console.log("Element at index 3:", list.get(3));

const copiedList = list.clone();
console.log("Copied list:");
copiedList.printList();

list.reverse();
console.log("Reversed list:");
list.printList();

const firstIndexA = list.findFirst("a");
const firstIndex1 = list.findFirst(1);
const firstIndex5 = list.findFirst(5);
console.log(`First occurrence of 'a':`, firstIndexA);
console.log(`First occurrence of 1:`, firstIndex1);
console.log(`First occurrence of 5:`, firstIndex5);

const lastIndexA = list.findLast("a");
const lastIndex1 = list.findLast(1);
const lastIndex5 = list.findLast(5);
console.log(`Last occurrence of 'a':`, lastIndexA);
console.log(`Last occurrence of 1:`, lastIndex1);
console.log(`Last occurrence of 5:`, lastIndex5);

list.clear();
console.log("Cleared list:");
list.printList();
console.log("List length after clear operation:", list.length());

const additionalList = [4, 5, 6];
console.log("List for extending:", additionalList);
list.extend(additionalList);

console.log("Extended list:");
list.printList();
console.log("List length after extend operation:", list.length());

module.exports = LinkedList;
