//Merge both arrays so that they are sorted 
//[0,3,4,31], [4,6,30])
//Return should be: [ 0,3,4,4,6,30,31 ]

const mergeSortedArrays = (arr1, arr2) => { 
    const mergedArray = []; 
    let arr1Item = arr1[0]; 
    let arr2Item = arr2[0]; 

    //Check input 
    if (arr1.length === 0) { 
        return arr2; 
    }

    if (arr2.length === 0) { 
        return arr1; 
    }

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr1Item); 

        if (!arr2Item || arr1Item < arr2Item) { 
            mergedArray.push(arr1Item); 
            arr1Item = arr1[i]; 
            i++; 
        } else { 
            mergedArray.push(arr2Item); 
            arr2Item = arr2[j]; 
            j++; 
        }
    }

    return mergedArray; 
}


mergeSortedArrays([0,3,4,31], [4,6,30]); 