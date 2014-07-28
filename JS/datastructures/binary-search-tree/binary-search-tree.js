/**
 * This is a binary search tree implementation in JavaScript.
 * This implementation does not allow for duplicate values to entered into
 * the tree.
 *
 * @BinarySearchTree
 * @constructor
 *
 */

function BinarySearchTree(){
    /**
     * @property _root
     * @type Object
     * @private
     */
    this._root=null;

}

BinarySearchTree.prototype = {
    //restore constructor
    constructor: BinarySearchTree,

    //Private Members:
    //---------------------------------------
    add: function(value){
        //Create a new object item, to place data in.
        var node ={
            value: value,
            left: null,
            right: null
         },current

    },

    contains: function(value){
        var found   = false,
            current = this._root
        //
    },
    remove: function(value){},
    size: function(){},
    toArray: function(){},
    toString: function(){}

};
