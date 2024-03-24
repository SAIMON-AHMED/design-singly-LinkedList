class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(i) {
        if (i < 0 || i >= this.size) {
            return -1;
        } else {
            let cur = this.head;
            let count = 0;
            while(count < i) {
                cur = cur.next;
                count++;
            }
            return cur.val;
        }
    }
    insertHead(val) {
        const newNode = new Node(val);
        if(this.head === null) { // modified; used this.head === null instead of !this.head
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    insertTail(val) {
        const newNode = new Node(val);
        if (this.head === null) { // modified; used this.head === null instead of !this.head
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    remove(i) {
        if (i < 0 || i >= this.size) {
            return false;
        } else {
            
            if (i === 0) {
                this.head = this.head.next;
                if (this.head === null) { // modified; used this.head === null instead of !this.head
                    this.tail = null;
                }
            } else {
                let cur = this.head;
                let prev = null;
                for (let j = 0; j < i; j++) {
                    prev = cur;
                    cur = cur.next;
                }
                prev.next = cur.next;
                if (prev.next === null) { // modified; used prev.next === null instead of !prev.next
                    this.tail = prev;
                }
            }
            this.size--;
            return true;
        }
    }
    getValues() {
        const arr = [];
        let cur = this.head;
        while(cur !== null) { // modified; used cur !== null instead of cur
            arr.push(cur.val);
            cur = cur.next;
        }
        return arr;
    }
}

// these modification is just for my clarity. I struggled to understand !prev.next. That's why.
