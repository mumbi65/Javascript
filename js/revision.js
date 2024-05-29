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
 const arr = [2, 4, 6, 8, 9, 10]
   function arrayRaisedToItsPower(arr){
    let result = []
    for(m = 0; m < arr.length; m++){
        let power = arr[m] ** [m]
        result.push(power)
    }
    return result
   }
   console.log(arrayRaisedToItsPower(arr))
}
