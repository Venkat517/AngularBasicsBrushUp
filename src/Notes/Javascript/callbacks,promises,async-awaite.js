//Asynch JS

console.log('This is');
setTimeout(() => {
  console.log('sample')
}, 5000);
console.log('demo')

// call backs; calling a function inside a function

let order = () => {
  console.log('Order received and about to call production');
  production();
}

let production = () => {
  console.log('Production started');
}

//calling a function
order(production);


// Implementing Promise : to avoid callback hell

//Need to keep track of following things
// Relationship between time and work
// Promise chaining
// Error handling
// finally holder

// lets create a object with diff arrays

let smoothie = {
  fruits: ['Apple', 'Banana', 'Grapes'],
  liquids: ['water', 'ice'],
  container: ['large', 'medium', 'small'],
  holder: ['cup', 'cone'],
  toppings: ['sprinkles', 'gummies']
}

// condition check

let is_Shop_open = true;

// fun with 2 params and return a promise with resolve and reject

let order = ((time, work) => {
  return new Promise((resolve, reject) => {
    //check for condtion which evalutes either resolve or reject
    if (is_Shop_open) {
      setTimeout(() => {
        resolve(work())
      }, time);
    }
    else {
      reject(console.log('Shop is closed'));
    }
  })
})
// callina a function order

order(2000, () => console.log(`${smoothie.fruits[0]} with ${smoothie.container[1]} container was selected`))

  // Implementing promise chain

  .then(() => {
    return order(0000, () => console.log('Fruits are choped'));
  })

  .then(() => {
    return order(5000, () => console.log(`Added ${smoothie.liquids[0]} and ${smoothie.liquids[1]}`));
  })

  .then(() => {
    return order(1000, () => console.log('Started Machine'))
  })

  .then(() => {
    return order(2000, () => console.log(`Selected ${smoothie.container[1]} container`));
  })

  .then(() => {
    return order(2000, () => console.log('Smoothie was served'));
  })

  // Error handling
  .catch(() => {
    console.log('Customer left');
  })

  // Finally Handler
  .finally(() => {
    console.log('Shop closed for today');
  })
