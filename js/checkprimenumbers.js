{
    function checkPrimeNumbers(n){
        if(n <= 1){
            console.log( m + ":" + " false")
        }
        for(m = 2; m < n; m++ ){
            if (n % m == 0){
                console.log( m + ":" + " false");
            }
        }
        console.log(m + ":" + " true");
    }
    checkPrimeNumbers(30)
}