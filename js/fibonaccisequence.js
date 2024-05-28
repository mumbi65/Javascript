{
    // function fibonacciSequence(n){
    //     let result = []
    //     for(let i = 0; i <= n; i++){
    //         let sum = 0;
    //         for(let k = i; k <= n; k++){
    //             sum = sum + k;
    //             result.push(sum);
    //         }
    //     }
    //     return result;
    // }
    // console.log(fibonacciSequence(6))
}

{
    function fibonacciSequence(n){
        if (n == 0){
            return []
        }else if (n === 1){
            return [0]
        }else if( n === 2){
            return [0, 1]
        }else{
            sequence = [0, 1]
        }
        for(let i = 2; i < n; i++){
            noToBePushed = sequence[i - 1] + sequence [i - 2];
            sequence.push(noToBePushed)
        }
        return sequence
    }
    console.log(fibonacciSequence(10))
}
