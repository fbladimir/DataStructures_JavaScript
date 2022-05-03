//Google Question

//this method is using o(n^2) 
const FirstRecurringCharacter = (arr) => { 
    //check array first 
    if (arr.length === 0) { 
        return undefined 
    } else {  
    for (let i = 0; i < arr.length; i++) { 
        for (let j = i + 1; j < arr.length; j++ ) { 
            
            if (arr[i] === arr[j]) { 
                return arr[i]; 
            }


            } // for j end 
        } //for i end 

    } // else end

    return undefined; 

} //method end 

//using map uses o(n)
const FirstRecurringCharacter2 = (arr) => { 

    let map = {}; 

    for(let i = 0; i < arr.length; i++) { 
        if ( map[ arr[i] ] !== undefined ) { 
            return arr[i]; 
        } else { 
            map[arr[i]] = i; 
        }
    } 
    return undefined; 
}

//Given an array = [2,5,1,2,3,5,1,2,4]: 
//It should return 2 
const testArray = [2,5,1,2,3,5,1,2,4]; 
console.log(FirstRecurringCharacter(testArray)); 
console.log(FirstRecurringCharacter2(testArray)); 

//empty array 
//it should return undefined 
const testArray2 = []; 
console.log(FirstRecurringCharacter(testArray2)); 

//Give an array = [2,1,1,2,3,5,1,2,4]: 
//it should return 1 
const testArray3 = [2,1,1,2,3,5,1,2,4]; 
console.log(FirstRecurringCharacter2(testArray3)); 


//Give an array = [2,3,4,5]:
//it shoulld return undefined

const testArray4 = [2,3,4,5]; 
console.log(FirstRecurringCharacter2(testArray4)); 