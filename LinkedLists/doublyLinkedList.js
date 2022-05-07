

class Node { 
    constructor(value) { 
        this.value = value; 
        this.next = null;
        this.prev = null;  
    }
}



class doublyLinkedList { 

    constructor(value) { 
        this.head = { 
            value: value, 
            next: null,
            prev: null,  
        }

        this.tail = this.head; 
        this.length = 1; 
    }

    append(value) { 
        //code

        const newNode = new Node(value);
        newNode.prev = this.tail; 
        this.tail.next = newNode; 
        this.tail = newNode; 

        this.length++;  



    } //apend end 

    preprend(value) { 
        //code 

        const newNode = new Node(value); 

        this.head.prev = newNode; 
        newNode.next = this.head; 
        this.head = newNode; 
        this.length++; 

        return this; 



    } //prepend end 

    printList() { 
        //code 

        let arr = []; 
        let head = this.head; 

        for (let i = 0; i < this.length; i++) { 
            arr.push(head.value); 
            head = head.next; 
        }

        return arr; 


    } //printlist end 

    insert(index, value) { 
        //code 

        const newNode = new Node(value); 

        const leader = this.traverseToIndex(index-1); 
        const follower = leader.next; 

        leader.next = newNode; 
        newNode.next = follower; 
        this.length++; 


    } //insert end 

    remove(index) { 
        //code 

        const leader = this.traverseToIndex(index-1); 
        const removeNode = leader.next; 

        leader.next = removeNode.next; 
        this.length--; 



    } //remove end 

    traverseToIndex(index) { 
        //check params 
        let counter = 0; 

        let currentNode = this.head; 

        while (counter !== index) { 
            currentNode = currentNode.next; 
            counter++; 
        }

        return currentNode; 
    }

} //class end 


const myLinkedList = new doublyLinkedList(10); 
myLinkedList.append(2); 
myLinkedList.preprend(1); 
myLinkedList.insert(2,99); 
myLinkedList.remove(1); 


console.log(myLinkedList.printList());
console.log(myLinkedList); //
