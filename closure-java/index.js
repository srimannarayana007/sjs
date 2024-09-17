
function outerFunction(outerVariable) {
    
    function innerFunction(innerVariable) {
      console.log(`Outer variable: ${outerVariable}`);
      console.log(`Inner variable: ${innerVariable}`);
    }
    return innerFunction;
  }
  const closure = outerFunction('Hello');
  closure('sanjay');