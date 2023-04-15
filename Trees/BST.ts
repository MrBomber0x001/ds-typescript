type BSTNode<T> = {
    value: T;
    left?: BSTNode<T>;
    right?: BSTNode<T>;
}


export default class BinarySearchTree<T> {
    private root?: BSTNode<T>
    constructor() {
        this.root = undefined
    }

    find(item: T): T | undefined {
        return undefined
    }

    public add(item: T): void {
        const node = { value: item } as BSTNode<T>

        if (!this.root) {
            this.root = node;
            return;
        }

        let curr = this.root;
        while (true) {
            if (item < curr.value) {
                if (!curr.left) {
                    curr.left = node;
                    return;
                }
                curr = curr.left
            } else {
                if (!curr.right) {
                    curr.right = node;
                    return;
                }
                curr = curr.right
            }
        }
    }
}


function main() {
    let tree: BinarySearchTree<number> = new BinarySearchTree();
    for (let i = 0; i < 10; ++i) {
        tree.add(i);
    }
    const node = tree.find(20);
    if (!node) {
        console.log(`can't find node`);
    } else {
        console.log(node)
    }
}




main();