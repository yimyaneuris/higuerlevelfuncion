const customers = require('./mock');

// Traer todos los nombres de clientes mayores a 30
let result = [];

for(let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    if(customer.age > 30) {
        result.push(customer);
    }
}
// console.log(result);

// Traer el primer cliente que trabaja en tecnologia
let first = null;
for(let i = 0; i < customers.length; i++){
    let customer = customers[i];
    if (customer.ocupation === 'Technology') {
        first = customer;
        break;
    }
}

// console.log(first);

// añadir un año a cada cliente
for(let i = 0; i < customers.length; i++){
    let customer = customers[i];
    customer.age++;
}

// sumar todas las edades
let sum = 0;
for(let i = 0; i < customers.length; i++){
    let customer = customers[i];
    sum += customer.age;
}

console.log(customers);