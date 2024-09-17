function Person (name) {
    this.name = name;
}

function greet(age, city) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old from ${city}.`);
}

Person.prototype.introduce = function(age, city) {
    // Using Call
    greet.call(this, age, city);
    
    // Using Apply
    let args = [age, city];
    greet.apply(this, args);
    
    // Using Bind
    let boundGreet = greet.bind(this, age, city);
    boundGreet();
}
 
let sanjay = new Person("sanjay");
sanjay.introduce(28, "guntur");