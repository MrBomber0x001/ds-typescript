/**
 * @desc Queue LinkedLists Based Implementation 
 */
type QNode<T> = {
    value: T
    next: QNode<T> | undefined
}



export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++
        const node = { value: item } as QNode<T>
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node
        this.tail = node
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }

        if (this.length === 0) {
            this.tail = undefined
        }
        this.length--
        const head = this.head
        this.head = this.head?.next

        // freeing [Book_keeping]
        head.next = undefined
        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}

function main() {
    const queue = new Queue();
    for (let i = 0; i < 10; i++) {
        queue.enqueue(i);
    }
}

