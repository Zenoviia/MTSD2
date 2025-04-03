const ArrayBasedList = require("../src/array_based_list");
const SinglyLinkedCircularList = require("../src/singly_linked_circular_list");

const listImplementations = [
  { name: 'Array Based List', createList: () => new ArrayBasedList() },
  { name: 'Singly Linked Circular List', createList: () => new SinglyLinkedCircularList() }
];

listImplementations.forEach(({ name, createList }) => {
  describe(`Linked List - ${name}`, () => {
    let list;

    beforeEach(() => {
      list = createList();  
    });

    test("append() should add elements to the list", () => {
      list.append(1);
      list.append(2);
      expect(list.length()).toBe(2);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
    });

    test("insert() should add elements to the list at specified index", () => {
      list.append(1);
      list.append(2);
      list.insert(3, 1);
      expect(list.get(1)).toBe(3);
      expect(list.length()).toBe(3);
    });

    test("delete() should remove elements by index", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.delete(1);
      expect(list.get(1)).toBe(3);
      expect(list.length()).toBe(2);
    });

    test("deleteAll() should remove all occurrences of a value", () => {
      list.append(2);
      list.append(2);
      list.append(3);
      list.deleteAll(2);
      expect(list.length()).toBe(1);
      expect(list.get(0)).toBe(3);
    });

    test("get() should retrieve element by index", () => {
      list.append(5);
      expect(list.get(0)).toBe(5);
    });

    test("clone() should create an identical list", () => {
      list.append(1);
      const cloned = list.clone();
      expect(cloned.get(0)).toBe(1);
      expect(cloned.length()).toBe(1);
    });

    // test("reverse() should reverse the list", () => {
    //   list.append(1);
    //   list.append(2);
    //   list.reverse();
    //   expect(list.get(0)).toBe(2);
    // });

    // test("findFirst() should find the first occurrence of a value", () => {
    //   list.append(1);
    //   list.append(2);
    //   expect(list.findFirst(2)).toBe(1);
    // });

    // test("findLast() should find the last occurrence of a value", () => {
    //   list.append(1);
    //   list.append(2);
    //   list.append(1);
    //   expect(list.findLast(1)).toBe(2);
    // });

    // test("clear() should empty the list", () => {
    //   list.append(1);
    //   list.clear();
    //   expect(list.length()).toBe(0);
    // });

    // test("extend() should add all elements from another list", () => {
    //   list.append(1);
    //   list.extend([2, 3]);
    //   expect(list.length()).toBe(3);
    //   expect(list.get(1)).toBe(2);
    // });

    test("length() should return the correct length", () => {
      expect(list.length()).toBe(0);
      list.append(1);
      expect(list.length()).toBe(1);
    });

    test("printList() should output the list", () => {
      console.log = jest.fn();
      list.append(1);
      list.printList();
      expect(console.log).toHaveBeenCalledWith([1]);
    });
  });
});
