{
    for (let i = 0; i <=10; i++)
        console.log("Today is Thursday " + i)
}

{
    const arr = [34, 56, 78, 90, 23, 56, 76, 43]
    console.log(arr)
     
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 2;
    }

    console.log(arr)
}

// sum upto
{
    let n = 5
    let sum = 0
    for(let k = 0; k <= n; k++){
        sum = sum + k;
        
    }
    console.log(sum);
}

{
    function printValues(n){
        for(let k = 0; k <= n; k+=2){
            console.log(k)
        
        }
    }
    printValues(10)
    
    function reverseValues(m){
        for(let p = m; p>=0; p--){
            console.log(p)
        }
    }
    reverseValues(20)
}

{
    function evenNumbers(n){
        for(k = 0; k<=n; k++)
            if(k % 2 == 0){
                console.log(k)
            }
    }
    evenNumbers(20)
}

{
    function multiples(n){
        for(k = 0; k<=n; k++)
            if( (k % 5 == 0) || (k % 10 == 0) ){
                console.log(k)
            }
    }
    multiples(100)

    function multiplesByTen(m){
        for(p = 0; p<=m; p++)
            if(p % 10 == 0){
                console.log(p)
            }
    }
    multiples(100)
}

{
    function multiplyByPower(n, m){
        let prod = 1
        for( k = 1; k <= m ; k++){
           prod = prod * n   
        }
        return prod
    }
    console.log(multiplyByPower(4, 2))
}

{
    // arrays
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    let n = numbers.length - 1;
    for (let i = n; i >= 0; i--){
        console.log(numbers[i])
        
    }
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function sumInArray(){
        let sum = 0;
        for(let i = 0; i < numbers.length; i++ )
            if(( numbers[i]) % 2 == 0){
                sum = sum + numbers[1];
            }
            return sum;
    }
    console.log(sumInArray())
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getLeast(){
        let currentSmallest = numbers[0]
        for (let i = 0; i < numbers.length; i ++){
            if(numbers[i] < currentSmallest){
                currentSmallest = numbers[i];
            }
        }
        return currentSmallest;
    }
    console.log(getLeast())
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getLeast(){
        let currentSmallest = numbers[0]
        for (let i = 0; i < numbers.length; i ++){
            if(numbers[i] > currentSmallest){
                currentSmallest = numbers[i];
            }
        }
        return currentSmallest;
    }
    console.log(getLeast())
}


{
    // sum of numbers upto 5

function sumOfNumbers(n){
    let sum = 0;
    for(let k = 0; k <= n; k++){
        sum = sum + k;
}
return sum
    }
console.log(sumOfNumbers(10))
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function evenNumbers(){
        for(i = 0; i < numbers.length; i++){
            if(numbers[i] % 2 == 0)
                console.log(numbers[i])
        }
    }
    evenNumbers()

}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function sumOfEvenNumbers(){
        let sum = 0;
        for(i = 0; i < numbers.length; i++){
            if((numbers[i]) % 2 == 0)
                sum = sum + numbers[i]
        }
        return sum
    }
    console.log (sumOfEvenNumbers())
}

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getLeast(){
        let least = numbers[0];
        for(k = 0; k < numbers.length; k++){
            if(numbers[k] < least)
                least = numbers[k]
                
        }
        return least
    }
    console.log (getLeast())
}