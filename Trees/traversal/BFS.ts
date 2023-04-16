import { BSTNode } from "../BST";
export default function BFS(): any[] {
    let visited: any[] = [],
        queue: any[] = [],
        node = this.root as BSTNode<any>;
    queue.push(node);
    while (queue.length) {
        node = queue.shift(); // dequeud, then check the dequed one to check for right and left
        visited.push(node);
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return visited
}