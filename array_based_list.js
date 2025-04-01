class ListNode {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

const list = new LinkedList();
console.log("List empty:", list.isEmpty());
console.log("List size:", list.getSize());