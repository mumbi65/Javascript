{
    const arr = [[8, 9, 4, 56, 78], [67, 89, 98], [56, 45, 32, 45], [45, 67, 80]]

    function sumOfArrays(arr){
        
        let sumArray = []
        arr.forEach((innerArray) => {
            let sum = 0;
            innerArray.forEach((element) => {
                sum = sum + element;
                
            })
            sumArray.push(sum)
        });
        let totalSum = 0;
        sumArray.forEach((value)=>{
            totalSum = totalSum + value
        })
        console.log("Total: " + totalSum)
        return sumArray;
    }
    console.log(sumOfArrays(arr))
}
