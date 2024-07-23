class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    getTailValue() {
        if (this.tail) {
            const acc = this.tail.value;
            return acc;
        }
        return null; // Or handle the case where the list is empty
    }
}

// Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.getTailValue()); // Output: 30
