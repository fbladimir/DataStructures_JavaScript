//Quick notes: 
// o(1) - insert, lookup, delete, search 
//map allows you to save any data type as key, maintains insertion order  
//const a = new Map(); 

//sets - difference is it only stores keys no values 
//const b = new Sets(); 



//-------------Implementing a Hash Table------------------//
class HashTable { 
    constructor(size) { 
        this.data = new Array(size); 
    } //constructor end 


    _hash(key) { 
        let hash = 0; 
        for (let i =0; i < key.length; i++) { 
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; 

        }

        return hash; 
    } //_hash end 

    set(key, value) { 
        let address = this._hash(key);
        if ( !this.data[address] )  { 
            this.data[address] = [];  
        } 
        this.data[address].push([key,value])
        return this.data

    } //set end 

    get(key) { 
        let address = this._hash(key); 
        const currentBucket = this.data[address]; 
        if (currentBucket) { 
            for (let i = 0; i < currentBucket.length; i++) { 

                if (currentBucket[i][0] === key) { 
                    return currentBucket[i][1]; 
                }
            }
        }

        return undefined; 
        
    } //get end 

    keys() { 
        const keysArray = []; 
        for (let i = 0; i < this.data.length; i++) { 
            if (this.data[i] ) { 
                keysArray.push(this.data[i][0][0]); 
            }
        }

        return keysArray; 
    }


} //class end 

const myHashTable = new HashTable(50); 

myHashTable.set('grapes', 10000); 
myHashTable.get('grapes'); 
myHashTable.keys(); 