type LNode<T> = {
    value: T;
    next?: LNode<T>;
}

interface Linked<T> {
    get length(): number;
    insert(item: T): T | undefined;
    insertAt(item: T, index: number): void
    remove(item: T): void
    removeAt(item: T, index: number): void
    get(index: number): T | undefined
}


export default class LinkedList<T> implements Linked<T>{
    public length: number;
    private head?: LNode<T>;
    constructor() {
        this.head = undefined
        this.length = 0;
    }

    insert(item: T): T | undefined {

    }

    insertAt(item: T, index: number): void {

    }

    remove(item: T): void {

    }

    removeAt(item: T, index: number): void {

    }

    get(index: number): T | undefined {

    }

}