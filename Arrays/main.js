//----------------ARRAY BASICS---------------------------------//
const arr = ['a', 'b', 'c', 'd', 'e',]; 

//push  
arr.push('f'); //adds at the end O(1) 

//pop 
arr.pop(); //O(1) pops last element 

//unshift 
arr.unshift('x'); // O(1) adds at the beginning 

//splice 
arr.splice(2, 0, 'alien'); //start at index, delete? 0, add alien O(n)

console.log(arr) 

//-----------------------IMPLEMENTING AN ARRAY------------------------// 
class MyArray { 
    constructor() { 
        this.length = 0; 
        this.data = {}; 
    }

    get(index) { 
        return this.data[index]; 
    }

    push(item) { 
        this.data[this.length] = item; 
        this.length++; 
        return this.length; 
    }

    //remove last item of the array 
    pop() {
        const lastItem = this.data[this.length-1]; 
        delete this.data[this.length-1];   
        this.length--;
        return lastItem;  
    }

    delete(index) { 
        const deletedItem = this.data[index];
        this.shiftItems(index);  
        return deletedItem; 
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) { 
            this.data[i] = this.data[i+1]; 
        } 

        delete this.data[this.length-1]; 
        this.length--; 

    }


}


const newArray = new MyArray();
newArray.push('1');
newArray.push('2');
newArray.push('3');  
newArray.pop(); 
newArray.delete(0); 

//2

console.log(newArray); 


//-------------------------Using Classes--------------------------------// 

class Player { 
    construtor(name, type) { 
        this.name = name; 
        this.type = type; 

    }
    introduce() { 
        console.log(`Hi i am ${this.name}, I'm a ${this.type}`); 
    }
}

class Wizard extends Player { 
    constructor(name, type) { 
        super(name, type) 
    }
    play() { 
        console.log(`Weee I am a ${this.type}`); 
    }
}

const wizard1 = new Wizard('Shelly', 'Healer'); 
const wizard2 = new Wizard('Shawn', 'Dark Magic'); 

wizard1.introduce(); 

