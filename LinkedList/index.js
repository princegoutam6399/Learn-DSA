class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter a valid index");
        } else {
            let node = new Node(element);
            let current, prev;
            current = this.head;

            if (index === 0) {
                // Insert at the beginning
                node.next = this.head;
                this.head = node;
            } else {
                let i = 0;

                while (i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }

                // Insert in between or at the end
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }

    // Additional helper methods like display can be useful
    display() {
        let current = this.head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

// Example usage:
let ll = new LinkedList();
ll.insertAt(10, 0); // Insert 10 at index 0
ll.insertAt(20, 1); // Insert 20 at index 1
ll.insertAt(15, 1); // Insert 15 at index 1

ll.display(); // Should output: 10, 15, 20
