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
    remove: function(value){
        var found       = false;
            parent      = null;
            current     = this._root,
            childCount,
            replacement,
            replacementParent;

        //This makes sure that there is a node to search.
        while(!found && current){

            //If the value is less than the current value go left.
            if(value < current.value){
                parent  = current;
                current = current.left;

            //If the value is less than the current value go left.
            }else if(value > current.value){
                parent  = current;
                current = current.right;
            }else{
                found = true;
            }
        }
        //Proceed only if the node was found.
        if(found){
            //To figure out how many children
            childCount =    (current.left !== null ? 1:0)+
                            (curent.right !== null ? 1:0);

            //In case the value is at root.
            if (current === this._root){
                switch(childCount){
                    //Erase the root since it has no children.
                    case 0:
                        this._root = null;
                        break;
                    //One child, use one as root.
                    case 1:
                        this._root = (current.right === null ? current.left : current.right);
                        break;

                }
            }
        }


    },
    size: function(){
        var length = 0;
        this.traverse(function(node){
            length++;
        });
        return length;
    },
    toArray: function(){
        var result =[];

        this.traverse(function(node){
            result.push(node.value);
        });
        return result;
    },
    toString: function(){
        return this.toArray().toString();
    },
    traverse: function(process){
        function inOrder(node){
            if (node){
                //traverse the left subtree
                if(node.left !==null){
                    inOrder(node.left);
                }
                //call the process method on this node
                process.call(this, node);
                //traverse the right subtree
                if(node.right !==null){
                    inOrder(node.right);
                }
            }
        }
        //start with the root
        inOrder(this._root);

    }

};
