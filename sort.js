const customers = require('./mock');

const sorted = customers.sort((a, b) => {
    return a.salary - b.salary
});

console.log(sorted);