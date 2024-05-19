{
    function fizzBuzz(n){
        for(m = 0; m <= n; m++){
            if ((m % 3 === 0) && (m % 6 === 0)){
                console.log("FizzBuzz")
            }
            else if (m % 6 === 0){
                console.log("Buzz")
            }
            else if (m % 3 === 0){
                console.log("Fizz")
            }
            else{
                console.log(m)
            }
        }
    }
    fizzBuzz(30)
}