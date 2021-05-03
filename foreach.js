const customers = require('./mock');

/**
 * forEach(callbackfn)
 * A function that accepts up to three arguments. forEach calls the callbackfn function one 
 * time for each element in the array.
 * Performs the specified action for each element in an array.
 * */
// get todos los clientes mayores de 30
let result = [];
customers.forEach(customer => {
    if( customer.age > 30 )
        result.push(customer);
});

// sumarle 1 año a la edad de cada cliente
customers.forEach(customer => {
    customer.age++;
});

// console.log(customers);