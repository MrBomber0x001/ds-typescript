## tips

npx just <nameofAlgorithms>

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

## LinkedLists

understanding them is crucial to understand trees and graphs!
every linkedlist is a graph, technically a tree!
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

```ts

```

## Recursion

you don't really understand it until you completely understand it or feel like
I feel completely lost and then all sudden i felt like i understood it completely
