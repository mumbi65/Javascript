{
    function sumAsync(num1, num2, callback) {
      let sum = num1 + num2
      callback(sum)
     
     
     
    }
        function Result(whatToDisplay) {
             console.log(whatToDisplay)
             }
     
     (sumAsync(10, 5, Result))
 }