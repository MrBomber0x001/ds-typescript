/**
 * @desc BST implementation [Iteratively]
 */
export type BSTNode<T> = {
    value: T;
    left?: BSTNode<T>;
    right?: BSTNode<T>;
}


export default class BinarySearchTree<T> {
    private root?: BSTNode<T>
    constructor() {
        this.root = undefined
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

    public delete(item: T): T | undefined {
        return undefined
    }
    public find(item: T): T | undefined {

        let curr = this.root;
        if (!curr) {
            return undefined;
        }
        while (curr) {
            if (curr.value === item) {
                return curr.value
            }

            if (curr.value > item) {
                //left
                curr = curr.left as BSTNode<T>
            }
            if (curr.value < item) {
                //right
                curr = curr.right
            }
        }
        return undefined
    }

    public BFS(): T[] {
        let visited: any[] = [],
            node = this.root as BSTNode<T>,
            queue: (BSTNode<T> | undefined)[] = [node];

        queue.push(node);
        while (queue.length) {
            node = queue.shift() as BSTNode<T>// dequeud, then check the dequed one to check for right and left
            if (!node) continue
            visited.push(node);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }

    public DfsPostOrder() {

    }

    public DfsInOrder() {

    }

    public DfsPreOrder() {

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