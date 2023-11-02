// 1. Create a copy of an array originalArray using the Spread operator.

const originalArray = [1,2,3];
const copyArray = [...originalArray];

console.log('Original Array:', originalArray); // Original Array: [ 1, 2, 3 ]
console.log('Copy Array:', copyArray); // Copy Array: [ 1, 2, 3 ]


// 2. Merge two arrays array1 and array2 into a single array using the Spread operator.

const array1 = [1,2,3];
const array2 = [4,5,6];

const mergedArray = [...array1, ...array2];

console.log('Merged Array:', mergedArray); // Merged Array: [ 1, 2, 3, 4, 5, 6 ]


// 3. Add a new element to the beginning of an array oldArray without modifying the original array using the Spread operator.

const oldArray = ['apple', 'banana', 'cherries'];

const newArray = ['orange', ...oldArray];

console.log("New Array: ", newArray); // New Array:  [ 'orange', 'apple', 'banana', 'cherries' ]


// 4. Use the Spread operator to clone an object originalObject into a new object copyObject.

const originalObject = {
    product: 'iPhone',
    price: 1500, 
    brand: 'Apple'
}

const copyObject = {...originalObject};

console.log('Copy Object:', copyObject); // Copy Object: { product: 'iPhone', price: 1500, brand: 'Apple' }


// 5. Combine two objects object1 and object2 into a single object using the Spread operator.

const object1 = { name: 'Alice', age: 25 };
const object2 = { country: 'USA', job: 'Engineer' };

const combinedObject = { ...object1, ...object2 };

console.log('Combined Object:', combinedObject); // Combined Object: { name: 'Alice', age: 25, country: 'USA', job: 'Engineer' }
