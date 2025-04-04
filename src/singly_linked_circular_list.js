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

  length() {
    return this.size;
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
    if (!this.validateIndex(index) && index !== this.size) return;

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

  delete(index) {
    if (!this.validateIndex(index)) return;

    if (index === 0) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
    } else if (index === this.size - 1) {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = this.head;
      this.tail = current;
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  deleteAll(value) {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let previous = this.tail;
    let count = 0;
    let initialSize = this.size;

    do {
      if (current.value === value) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
          this.size = 0;
          return;
        } else if (current === this.head) {
          this.head = current.next;
          this.tail.next = this.head;
          current = this.head;
          previous = this.tail;
        } else {
          previous.next = current.next;
          if (current === this.tail) {
            this.tail = previous;
          }
          current = previous.next;
        }
        this.size--;
      } else {
        previous = current;
        current = current.next;
      }
      count++;
    } while (count < initialSize && this.size > 0);
  }

  get(index) {
    if (!this.validateIndex(index)) return null;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.value;
  }

  clone() {
    if (this.size === 0) {
      console.log("List is empty");
      return new CircularLinkedList();
    }

    const newList = new CircularLinkedList();
    let current = this.head;

    do {
      newList.append(current.value);
      current = current.next;
    } while (current !== this.head);

    return newList;
  }

  reverse() {
    if (!this.head || this.head.next === this.head) {
      return;
    }

    let current = this.head;
    let prev = null;
    let next = null;

    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== this.head);

    this.tail = this.head;
    this.head = prev;
    this.tail.next = this.head;
  }

  findFirst(element) {
    if (this.size === 0) {
      return -1;
    }

    let current = this.head;
    let index = 0;

    do {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    } while (current !== this.head);

    return -1;
  }

  findLast(element) {
    if (this.size === 0) {
      return -1;
    }

    let current = this.head;
    let index = 0;
    let lastIndex = -1;

    do {
      if (current.value === element) {
        lastIndex = index;
      }
      current = current.next;
      index++;
    } while (current !== this.head);

    return lastIndex;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(elements) {
    if (!elements) return;

    const elementsToAdd = [...elements];
    for (const element of elementsToAdd) {
      this.append(element);
    }
  }

  printList() {
    if (this.size === 0) {
      console.log("[]");
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

module.exports = CircularLinkedList;
