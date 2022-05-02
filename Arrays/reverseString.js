//CREATE A FUNCTION THAT REVERSES A STRING: 
//'Hi my name is andrei' should be: 'ierdnA si eman iH' 

const theString = 'Hi my name is Andrei'; 

console.log('Original String: '); 
console.log(theString); 

const reverse = (str) => { 
    //check input 
    if (!str || str.length < 2 || typeof str !== 'string') { 
        return 'not a string'; 
    } 

    const backwards = []; 

    const length = str.length - 1;
    
    for (let i = length; i >= 0; i--) { 
        backwards.push(str[i]); 
    }

    return backwards.join(''); 
}

console.log('Reversed String: ');
const reversedString = reverse(theString);
console.log(reversedString); 

//-------Another Way to Reverse (Cleaner Way and more modern)------------------//

const reverse2 = str => str.split('').reverse().join(''); //built in method 

console.log('Using Another Reverse method: '); 
console.log(reverse2(theString)); 


