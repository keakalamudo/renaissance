/**
 * This is a Linked List implementation in JavaScript.
 * This implementation does not allow for duplicate values to entered into
 * the tree.
 *
 * @BinarySearchTree
 * @constructor
 *
 */

function LinkedList() {

    /**
     * The number of items in the list.
     * @property _length
     * @type int
     * @private
     */
    this._length = 0;

    /**
     * Pointer to first item in the list.
     * @property _head
     * @type Object
     * @private
     */
    this._head = null;
}