
class hashTable {
    constructor() {
        this.table = new Array(5);
        this.size = 0;
    }
    setKey(key) {
        return key % this.table.length;
    }

    insert(value) {
        const index = this.setKey(value);
        this.table[index] = value;
        this.size++;
    }

    getKey(key) {
        const target = this.setKey(key);
        return this.table[target];
    }

    search(value) {
        const index = this.setKey(value);
        if (this.table[index] == value) {
            console.log("The Value Found At index :", index);
        } else {
            console.log(" Not Found");
        }
    }

    delete(key) {
        const index = this.setKey(key);

        if (this.table[index]) {
            this.table[index] = [];
            this.size--;
            return true;
        }
        else {
            return false;
        }
    }
}

const hashTableExmaple = new hashTable();


hashTableExmaple.insert(100);
hashTableExmaple.insert(110);
hashTableExmaple.insert(10);


console.log(hashTableExmaple.table);


hashTableExmaple.search(30);
hashTableExmaple.search(10);

hashTableExmaple.delete(10);

console.log(hashTableExmaple.table);
