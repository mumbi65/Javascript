// {
//     let age = 30
//         if (age <= 3){
//             console.log("child should be at home")
//         }
//         else if(age <= 6){
//             console.log("should be kindergarten")
//         }
//         else if(age <= 10){
//             console.log("Lower Primary")
//         }
//         else if(age <= 14){
//             console.log("Upper Primary")
//         }
//         else if(age <= 18){
//             console.log("High School")
//         }
//         else if(age <= 24){
//             console.log("Campus")
//         }
//         else if(age <= 60){
//             console.log("Employed")
//         }
//         else{
//             console.log("Retired")
//         }
// }


// const arr = [6, 7, 8, 9, 5, 4, 7, 9]
//     arr.forEach((value, index) => {
//         console.log(value ** 0.25);
//     })
 
{
    // const arr = [20, 30, 40, 50, 60, 70, 90]

    // function getAverage(arr){
    //     let sum = 0;
    //     for(i = 0; i < arr.length; i++){
    //         sum = sum + arr[i];
    //         average = sum / arr.length
    //     }
    //     return average
    // }

    // console.log(getAverage(arr))
}

{
    // const array = [9, 10, 15, 20, 10, 5]

    // function diffMaxAndMin(arr){
    //     let min = arr[0];
    //     let max = arr[0];
    //     let diff = 0;

    //     for(k = 0; k < arr.length; k++){
    //         if(arr[k] < min){
    //             min = arr[k];
    //         }
    //         if(arr[k] > max){
    //             max = arr[k];
    //         }
    //         diff = max - min;
    //     }
    //     return diff
    // }
    // console.log(diffMaxAndMin(array))
}

{
//  const arr = [2, 4, 6, 8, 9, 10]
//    function arrayRaisedToItsPower(arr){
//     let result = []
//     for(m = 0; m < arr.length; m++){
//         let power = arr[m] ** [m]
//         result.push(power)
//     }
//     return result
//    }
//    console.log(arrayRaisedToItsPower(arr))
}

{
//   function calculation(){
//     let number1 = '2';
//     let number2 = '4';
//     let sum = parseInt(number1, 10) + parseInt(number2, 10);
//     console.log(sum)
//   }  
//   calculation()
}

{
    // let calculation = 0

    // function addNumber(){
    //     calculation = '2' + '2.5';
    //     console.log(parseInt(calculation, 10))
    // }
    // addNumber()
}

{
    // function getSumAndNumbers(n){
    //     let sum = 0
    //     for(l = 0; l <= n; l++){
    //         if((l % 3 == 0) || (l % 5 == 0)){
    //             console.log(l)
    //             sum = sum + l
    //         }
    //     }
    //     console.log('Sum: '+ sum)
    // }
    // getSumAndNumbers(15)
    
}

{
//     const person = {
//         name: 'John',
//         age: 30,
//         city: 'New York'
//     };
    
//     for (let key in person) {
//         console.log(key + ': ' + person[key]);
//     }
// }
//     const colors = ['red', 'green', 'blue'];

//     for (let color of colors) {
//     console.log(color)
}

{
    // let i = 0;
    // while (true) {
    //     console.log(i);
    //     i++;
    //     if (i === 5) {
    //         break; // Exit the loop when i reaches 5
    //     }
    // }
    // console.log('Loop ended');
}

{
    // let i = 0;
    // while (i < 5) {
    //     console.log(i);
    //     i++;
    // }
    // console.log('Loop ended');
}

{
    // let sum = 20 + 10
    // let result = sum / 2
    // function getAverage(){
    //     setTimeout(() => {
    //         console.log(result++)
    //         getAverage()
    //     }, 2000);
    // }
    // getAverage()
}

{
    // function fibonacciSequence(n){
    //     if (n==0){
    //         return[]
    //     }else if(n ===1){
    //         return[0]
    //     }
    //     else if(n === 2){
    //         return[0, 1]
    //     }
    //     else{
    //         sequence = [0, 1]
    //     }
    //     for(i =2; i < n; i++){
    //         noToBePushed = sequence[i - 1] + sequence[i-2]
    //         sequence.push(noToBePushed)
    //     }
    //     return sequence
    
    // }
    // console.log(fibonacciSequence(10))
}

{
    let numbers = [2, 4, 5, 6, 7, 8, 10, 24, 54, 87]
    const filtered = numbers.filter((x) => {
        if(x <= 30){
            return x
        }
    })
    // console.log(filtered)
    console.log(filtered.every((num) => num < 10))
    console.log(filtered.some((num) => num < 50))
}
{
    // let names = ['carol', 'mumbi', 'gachara']
    // names.forEach((name) => console.log(`hey  ${name}`) )
}

{
    
}
