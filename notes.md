## tips

npx jest `nameOfAlgorithm>`

## Array vs Lists

Fixed size, contigeous memory chunks:

- you can't grow it.
- there's no "insertAt" or push or pop.
- have only `.length`
- you can only zeroish an item, not actually delete it and the indices are adjusted automatically!
ArrayBuffer is a contigeous array of buffer you can create, then you can create views into this data!

```js
const a = new ArrayBuffer(6)

const a8 = new Uint8Array(a)

a8[0] = 45
a8[2] = 45

const a16 = new Uint16Array(a)
a16[2] = 0x4545
```

a + width * offset => constant time [insertion&deletion] O(1)

## Searching

### Linear search O(n)

```ts
export function lineaer_search(haystack: number[], needle: number): boolean {
    for(let i = 0; i < haystack.length; ++i){
        if(haystack[i] === needle){
            return true
        }
    }
    return false
}

```

### Binary Search O(LogN) or O(NLogN)

the first question you should ask ? is it data ordered?
Binary search works only on a `sorted` set of data!

```ts
export default function bs_list(arr: []number, needle: number): boolean {
    let lo = 0;
    let hi = arr.length;

    do {    
        let m = Math.floor(lo + (hi - lo) / 2);
        let v = arr[m];
        if (v == needle) {
            return true
        } else if (v > needle){
            hi = m;
        } else {
            lo = m + 1;
        }
    } while ( lo < hi);
    return false
}
```

<https://www.geeksforgeeks.org/searching-algorithms/>

## Sorting

### Bubble sort

sort in place!

for every singluar iteration, the largest item is at the end [at the last spot]

so each time, we need to go up to but not including the last position
progressively going smaller iteration one after the other

swapping is constant operation!

n-1
n-2
n-3
...
..
.
1
the sum of those operations is by Gauss law N(N+1)/2

the array must be immutable!

```sh
for i .. N
    for j .. N-1-i # because we're going progressively smaller each iteration by one element>
        if arr[i] > arr[j]:
            swap(i, j)
```

```ts
export default function bubble_sort(arr: numbers[]): void {
    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; i < arr.length - 1 - j; ++j){
            if(arr[j] > arr[j + 1]){
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
```

theres are other sorting algorithms, but requires other concetps like recursions!

### QuickSort

You've to fully understand recurio before moving to this kind of algorithm

### MergeSort

### InsertSort

<https://www.geeksforgeeks.org/sorting-algorithms/>

## LinkedLists

understanding them is crucial to understand trees and graphs!
every linkedlist is a graph, technically a tree!

### Singly LinkedLists

Setting nexts and prevs is a constant time
insertion => O(1)

traversing should go from the head to the end!
there's ways to do fast traversal and we will get to that later!

Ordering of operation is extermeley important!
deletiong => O(1)

while traversing, we don't returning the containing node, because it's an implementation details, and anyone then can mess with it.

getting head/tail can be constant!

```ts
type LNode<T> = {
    value: T
    next?: LNode<T>
    prev?: LNode<T>
}

interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}
```

### Queue

Queue is a specific implementation of a linked list
we insert at the tail, and pop from the head
Enqueing and Dequeing is O(1),
We're traversing!

```ts
type QNode<T> = {
    value: T;
    next: QNode<T>
}

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>
    private tail?: QNode<T>

    deque(): T | undefined{
        if(!this.head) {
            return undefind;
        }
        this.length--
        const head = this.head;
        this.head = this.head.next;
    }
    enque(item: T): void{
        this.length++
        const node = {value: item} as QNode<T>
        if(!this.tail) {
            this.head = this.tail = node
            return
        }

        this.tail.next = node
        this.tail = node
    }

    peek(): T | undefind {
        return this.head?.value
    }
}
```

### Stack

Stack could be implemented based on singly linkedlist, and it's the opposite of a queue!
And the operations are just the same in the mean of Big O

```ts
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
```

### Doubly LinkedLists

```ts
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
```

## Recursion

you don't really understand it until you completely understand it or feel like
I feel completely lost and then all sudden i felt like i understood it completely

## Trees

technically all datastructures are eventually Graphs, for example, single linkedlist is some sort of trees

Trees have some strict rules:
    - a node can only point to children
    - children can't point to parent
    - siblings can't point to each other
    - there must be one root
    - a leaf has no children

the use cases are very verstaile, a tree can represent possible choices of a game! [ Decision tree ]
Binary Search Tree which is a subset of Binary Tree: Stores data that are compareable [sortable] classicaly numbers

#### BST

The data is kept in particular order

- Every parent node has at most two children
- Every node to the left of a parent node is always less then the parent!
- Every node to the right of a parent node is always greater then the parent!

Insertion can be done iteratively or recursively

```ts
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
```

#### Traversing

#### BFS

BFS: visit every node of the same level, working horizontally.
The solution presented here is iteratively

```ts
    public BFS(): T[] {
        let visited: any[] = [],
            queue: any[] = [],
            node = this.root as BSTNode<T>;
        queue.push(node);
        while (queue.length) {
            node = queue.shift(); // dequeud, then check the dequed one to check for right and left
            visited.push(node);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }
```

#### DFS

DFS has 3 types of orders [preOrder, inOrder, postOrder]

```ts




```
