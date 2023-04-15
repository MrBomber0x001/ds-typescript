/**
 * @desc Stack LinkedLists Based Implementaion
 */

type SNode<T> = {
    value: T;
    prev?: SNode<T>
}

export default class Stack<T> {
    public length: number;
    private top?: SNode<T>;

    constructor() {
        this.top = undefined
        this.length = 0;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            this.top = undefined;
        }
        const top = this.top as SNode<T>
        this.top = top.prev
        return top.value
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>
        this.length++
        if (!this.top) {
            this.top = node;
            return
        }
        node.prev = this.top;
        this.top = node;
    }

    peek(): T | undefined {
        return this.top?.value
    }

}