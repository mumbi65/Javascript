{
    function sumAsync(num1, num2, callback) {
      let result = num1 + num2
      callback(result)
     
    }

    function callResults(result){
      setTimeout(() => {
        console.log(result)
      }, 5000) 
    }
  
     sumAsync(10, 5, callResults)
 }