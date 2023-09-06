function receivesAFunction(callback) {
    callback(); 
  }
  
  function returnsANamedFunction() {
   
    function namedFunction() {
      console.log("i am the named function ");
    }
    return namedFunction; 
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      
      console.log("i am the anonymous function ");
    };
  }
  

  