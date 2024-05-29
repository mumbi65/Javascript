{

    function doSomething(x, y, z, displayer){
        sum = x + y + z
        displayer(sum)
    }

    function myDisplayer(whatToDisplay){
        console.log(whatToDisplay)
    }

    function fancyDisplayer(whatToDisplay){
        console.log("Hello Mathematician, your sum is : " + whatToDisplay)
    }

    doSomething(45, 67, 43, fancyDisplayer)
}

{
    students = [
        {
            name: "John",
            marks: [67,89,90,56,43]
        },
        {
            name: "Dan",
            marks: [77,80,91,36,43]
        }, {
            name: "Anne",
            marks: [68,59,60,86,53]
        }
    ]

    function getSum(arr){
        sum = 0
        for(let i = 0; i<arr.length; i++){
            sum = sum + arr[i]
        }
        return sum;
    }

    function getAverage(arr, mySummer){
        total = mySummer(arr)
        return total/arr.length
    }

    function getStudentResults(studentArray, myAverager){
        for(let k = 0 ; k < studentArray.length; k++){
            console.log(studentArray[k].name, myAverager(studentArray[k].marks, getSum))
        }
    }
    getStudentResults(students, getAverage)
}

{
    function calculator(a, b, summer, multiplyer, divider, sub, displayer){
        sum = summer(a, b)
        product = multiplyer(a, b)
        div = divider(a, b)
        diff = sub(a, b)

        displayer(sum, product, div, diff)
    }

    function getSum(x, y){
        return x + y
    }

    function multiply(f, k){
        return f * k
    }

    function divider(r, w){
        return r/w
    }

    function substract(t, y){
        return t - y
    }

    function displayResults(s, m , d, su){
        console.log("Sum: " + s)
        console.log("Mult: " + m)
        console.log("Division: " + d)
        console.log("Diff: " + su)
    }

    calculator(27, 3, getSum, multiply, divider, substract, displayResults)
}

{
    let myPromise = new Promise(function(myResolver, myReject){
        let x = 0
        
        if(x == 0){
            myResolver("OK")
        }
        else{
            myReject("Error")
        }
    })

    myPromise.then(
        function(value){console.log(value)},
        function(error){console.log(error)}
    )
}



