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
        if(index > -1 && index < this.length){
            var current = this._head,
                previous,
                i =0;

            //special case: removing first item
            if(index === 0) {
                this._head = current.next;
            } else {
                //looking for the current location
                while(i++ < index){
                    previous = current;
                    current = current.next;
                }
                //skip over item to remove it.
                previous.next = current.next;
            }
            //decrement the length
            this._length--;

            //return the value
            return current.data;
        } else{
            return null;
        }

    },
    size: function(){
        return  this._length;
    },
    toArray:function(){
        var result = [],
            current = this._head;

        while(current){
            result.push(current.data);
            current = current.next;
        }
        return result;
    },
    toString:function(){
        return this.toArray().toString();
    }
};