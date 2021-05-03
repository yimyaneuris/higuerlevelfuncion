const customers = require('./mock');

// Get a array that contains the age of every customer
// Get an array with all customer and theirs age adding five
// Get the last name for every customer
/**
 * map(callbackfn: (value: {  }, index: number, array: {  } []) => any, thisArg?: any): any[]
 * A function that accepts up to three arguments. The map method calls the callbackfn function 
 * one time for each element in the array. Calls a defined callback function on each element of an array, 
 * and returns an array that contains the results.
 */
let result = customers.map(customer => {
    return customer.age;
});

let ageplus = customers.map(customer => {
    customer.age += 5;
    return customer;
});

console.log(ageplus);