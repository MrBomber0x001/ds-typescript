// interface LinkedList<T> {
//     get length(): number;
//     insertAt(item: T, index: number): void;
//     remove(item: T): T | undefined;
//     removeAt(item: T, index: number): T | undefined;
//     append(item: T): void;
//     prepend(item: T): void;
//     get(idx: number): T | undefined;
// }

type LNode<T> = {
    value: T;
    prev?: LNode<T>;
    next?: LNode<T>;
}

export default class DoublyLinkedList<T>{
    public length: number;
    private head?: LNode<T>;
    private tail?: LNode<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;

    }
    insertAt(item: T, idx: number): void {
        const node = { value: item } as LNode<T>;
        if (idx > this.length) {
            throw new Error("you can't insert.");
            return;
        }
        this.length++;
        if (idx == this.length) {
            this.append(item);
            return;
        } else if (idx == 0) {
            this.prepend(item);
        }
        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            curr = curr?.next;
        }
        curr = curr as LNode<T>;
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (curr.prev) {
            curr.prev.next = curr;
        }
    }

    remove(item: T) {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value = item) break;
            curr = curr.next
        }

        if (!curr) {
            return;
        }

    }

    removeAt(item: T, index: number) {
        return undefined
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as LNode<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        return undefined
    }

    prepend(item: T): void {
        const node = { value: item } as LNode<T>;
        this.length++
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    get(idx: number) {
        return undefined
    }
}