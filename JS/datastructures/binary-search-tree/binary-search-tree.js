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
         },

         //This will be used to traverse the structure
         current;

        //This is incase there are no items in the tree.
        if(this._root === null){
            this._root = node;
        }else{
            current = this._root;
            while(true){
                //if the value is less then the value of current node's then go left
                if(value < current.value){
                    current = current.left;

                    //if there is no left then the new value belong there.
                    if (current.left === null){
                        current.left = node;
                        break;
                    }else{
                        current = current.left;
                    }
                }

                //if the value is more then the value of current node's then go right
                else if(value > current.value){
                    current = current.right;
                    //if there's no right, then the the new value belongs here.
                    if (current.right === null){
                        current.right = node;
                        break;
                    }else{
                        current = current.right;
                    }
                }
                //if the new value is equal to the current one, break
                else{
                    break;
                }

            }
        }

    },

    contains: function(value){
        var found   = false,
            current = this._root

        //Making sure there is still a node to check
        while(!found && current){

            //if the value is less then the value of current node's then go left
            if(value < current.value){
                current = current.left;
            }

            //if the value is more then the value of current node's then go right
            else if(value > current.value){
                current = current.right;
            }

            //The values are equal which means that you have found it!
            else{
                found=true;
            }

        }return found;
    },
    remove: function(value){},
    size: function(){},
    toArray: function(){},
    toString: function(){}

};
