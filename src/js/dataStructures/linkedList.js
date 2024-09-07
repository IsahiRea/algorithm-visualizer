import { stopVisual, isActive, startVisual, sleep } from "../controls";
import { drawLinkedList, generateRandomArray } from "../canvas";

class Node {
    value = null;
    next = null;

    constructor(value) {
        this.value = value;
    }  
}

class LinkedList {
    head =  null;
    size = 1;

    constructor(head) {
        this.head = head;
    }

    insertFront(value) {
        let node = new Node(value)
        node.next = head;
        head = node;
        this.size++;
    }

    insertAfter(node, value) {
        if(node = null)
        {
            console.log('Previous node does not Exist');
        }

        let nodeAfter = new Node(value);
        nodeAfter.next = node.next;
        node.next = nodeAfter;
        this.size++;
    }

    insertEnd(value) {
        let newNode = new Node(value);
        let temp = this.head;

        while(temp.next) {
            temp = temp.next;
        }

        temp.next = newNode;
        this.size++;
    }

    deleteNode(position) {
        if (this.head == null) {
            return;
        }

        let node = this.head;
        prev = node

        if (position == 0) {
            this.head = node.next;
            return;
          }

        for(let i = 0; i < position - 1; i++) {
            prev = node
            node = node.next;
        }

        prev.next = node.next 

        this.size--;

    }

}

export function visualizeLinkedList() {
    performListOperations();
}

async function performListOperations() {
    startVisual();

    let array = generateRandomArray();

    //Initialize the Linked List
    let LL = new LinkedList();
    LL.head = new Node(array[0]);

    drawLinkedList(LL);
    await sleep(2000);
    
    const len = 6;
    for(let i = 1; i < len; i++) {
        LL.insertEnd(array[i]);
        drawLinkedList(LL);
        await sleep(2000);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }
    

    stopVisual();
}