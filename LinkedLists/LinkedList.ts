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
    constructor() {
        this.length = 0;
        this.head = undefined;

    }
    insertAt(item: T, index: number): void {

    }

    remove(item: T) {
        return undefined
    }

    removeAt(item: T, index: number) {
        return undefined
    }

    append(item: T): void {
        return undefined
    }

    prepend(item: T): void {

    }
    get(idx: number) {
        return undefined
    }
}