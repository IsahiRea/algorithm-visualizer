import { stopVisual, isActive, startVisual, sleep } from "../controls";
import { drawTree, generateRandomArray } from "../canvas";

// Tree node class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if(!node) {
            return new TreeNode(value);
        }

        if(value < node.value) {
            node.left = this.insertNode(node.left, value);
        }
        else {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }

    delete(value) {
        this.root = deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if(!node) {
            return null;
        }

        if(value < node.value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        }
        else { // Matches

            // If the node is with only one child or no child
            if (node.left == null) return node.right;
              
            else if (node.right == null) return node.left;
      
            // If the node has both children
            // Place the inorder successor in position of the node to be deleted
            node.value = this.minValue(node.right);
      
            // Delete the inorder successor
            node.right = this.deleteNode(node.right, node.value);
        }

        return node;
    }

    // Find the inorder successor
    minValue(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }
}


export function visualizeBST() {
    performTreeOperations();
}


async function performTreeOperations() {
    startVisual();
    
    let array = generateRandomArray();
    console.log(array)

    let BST = new binarySearchTree();

    const len = 6;
    for(let i = 0; i < len; i++) {
        
        BST.insert(array[i]);
        drawTree(BST);
        await sleep(1000);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    stopVisual();
}




