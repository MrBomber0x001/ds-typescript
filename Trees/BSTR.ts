/**
 * @desc BST implementation [Rescursively]
 */
interface IBST<T> {
    insert(value: T): void;
    search(value: T): boolean;
    remove(value: T): void;
    inOrderTraversal(): T[];
}

class BSTNode<T> {
    value: T;
    left: BSTNode<T> | null;
    right: BSTNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST<T> implements IBST<T> {
    private root: BSTNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: BSTNode<T> | null, value: T): BSTNode<T> {
        if (node === null) {
            return new BSTNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        return node;
    }

    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: BSTNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    remove(value: T): void {
        this.root = this.removeNode(this.root, value);
    }

    private removeNode(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            const minValue = this.findMinValue(node.right);
            node.value = minValue;
            node.right = this.removeNode(node.right, minValue);
            return node;
        }
    }

    private findMinValue(node: BSTNode<T>): T {
        return node.left ? this.findMinValue(node.left) : node.value;
    }

    inOrderTraversal(): T[] {
        const result: T[] = [];
        this.inOrderTraversalNode(this.root, result);
        return result;
    }

    private inOrderTraversalNode(node: BSTNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, result);
            result.push(node.value);
            this.inOrderTraversalNode(node.right, result);
        }
    }
}
