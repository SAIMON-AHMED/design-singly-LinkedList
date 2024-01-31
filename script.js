class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
    
        let count = 0;
        let curr = this.head.next;
        while( count <= index && curr) {

            
            if (count === index) {
                return curr.value;
            }
            curr = curr.next;
            count++;
        }
        return -1;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {

        const node = new Node(val);
        node.next = this.head.next;
        this.head.next = node;
        if (!node.next) {
            // if list was empty before insertion
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {

        const node = new Node(val);
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {

        let curr = this.head;
        let count = 0;

        while (count < index && curr) {

            curr = curr.next;
            count++;
        }
        
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }



    /**
     * @return {number[]}
     */
    getValues() {
        
        let curr = this.head.next;
        let array = [];

        while (curr !== null) {
            array.push(curr.value);
            curr = curr.next;
        }
        return array;
    }
}
