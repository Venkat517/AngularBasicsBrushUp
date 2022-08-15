const logme = (func) => (...args) => func(...args);
const delayLog = logme((cb, d) => setTimeout(cb, d));

delayLog(() => console.log('sandeep'), 10000)

// Topics covered 1) Advacnced Arrow functions 2) Nested functions 3) rest call backs 4) timeout
