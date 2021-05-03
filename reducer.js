const customers = require('./mock');

const totalSalary = customers.reduce((salary, customer) => {

    return salary += customer.salary;

}, 0);

console.log(totalSalary);