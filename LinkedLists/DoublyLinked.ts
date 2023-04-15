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
        let curr = this.getAt(idx) as LNode<T>;
        const node = { value: item } as LNode<T>;
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = curr;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        //getAt()
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.next === item) {
                break;
            }
            curr = curr.next
        }
        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
    }

    removeAt(item: T, idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined
        }

        return this.removeNode(node);
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
    get(idx: number): T | undefined {
        const node = this.getAt(idx);
        return node?.value
    }
    private removeNode(node: LNode<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined
            return out;
        }
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.head) {
            this.head = node.next
        }
        if (node === this.tail) {
            this.tail = node.prev
        }
        node.next = node.prev = undefined
        return node.value

    }
    private getAt(idx: number): LNode<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}