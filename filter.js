const customers = require('./mock');

// filter all customer such is higher than 9000

const salaries = customers.filter(customer => {

    const grater = 20000;

    return customer.salary >= grater

});

console.log(salaries);