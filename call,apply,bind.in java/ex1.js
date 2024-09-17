function add(x, y) {
    return x + y;
  }
  
let result = add.call(null, 3, 5); // this is null, but we can pass any object as this
  console.log(result); // Output: 8

function add(x, y) {
    return x + y;
  }
  
let args = [3, 5];
let result = add.apply(null, args); // this is null, but we can pass any object as this
  console.log(result); // Output: 8

function add(x, y) {
    return x + y;
  }
  
let boundAdd = add.bind(null, 3); // this is null, but we can pass any object as this
let result = boundAdd(5); // Output: 8
console.log(result);