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

LinkedList.prototype = {
    add:function(data){
        //create a new node
        var node = {
            data: data,
            next: null
            },
            //Use to traverse the structure.
            current;

        //special case: no items in the list yet.
        if(this._head === null){
            this._head = node;
        } else {
            current = this._head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this._length++;
    },

    item:function(index){
        //check for out-of-bounds values
        if(index > -1 && index < this.length){
            var current = this._head;
            i = 0;
            while(i++ < index){
                current = current.next;
            }
            return current.data;
        }else{
            return null;
        }
    },
    remove:function(index){

    }
};