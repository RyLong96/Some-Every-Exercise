//Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

// function hasOddNumber(arr){
//     return arr.some(function(val){
//         return val % 2 !== 0;
//     })
//     }


function hasOddNumber(arr){
    return arr.some((val) => val % 2 !== 0);
}

//Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

function hasAZero(int){
    const n = int;              //setting the number passed through to a variable
    const arr = Array.from(n.toString()).map(Number);           //array.from is turning into a whatever passed through to make it an iterable array. n.tostring chained with map
    return arr.some((val) => val === 0);
}

//Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(arr){
    return arr.every((val) => val % 2 !== 0)
}

//Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values(more than one element in the array that has the same value as another). If there are duplicates, the function should return false.
function hasNoDuplicates(arr){
    return arr.every((val) => arr.indexOf(val) === arr.lastIndexOf(val));
}

//Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single
//object in the array contains that key. Otherwise it should return false.



function hasCertainKey(arr, key){
    return arr.every((val) => key in val)
}

//Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key.
//Otherwise it should return false. 

function hasCertainValue(arr, key, value){
    return arr.every((val) => val[key] === value)
}

