/**
 * @desc compare two binary tree togethers!
 */
import BinarySearchTree, { BSTNode } from './BST'

export default function compare2BST(a: BSTNode<any> | undefined, b: BSTNode<any> | undefined): boolean {
    if (a == undefined && b == undefined) {
        return true // they're both nullably equal
    }

    if (a == undefined || b == undefined) {
        return false
    }

    if (a.value !== b.value) {
        return false
    }

    return compare2BST(a.left, b.left) && compare2BST(a.right, b.right);
}