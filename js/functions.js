// functions

{
    function tellMeSomethingGood(){
        console.log("Arsenal will not win the league")
    }
    tellMeSomethingGood()
    function twoGreetings(greeting1, greeting2){
        console.log("Greeting one is " + greeting1);
        console.log("Greeting two is " + greeting2)
    }
    twoGreetings("Hello", "Jambo")  
}

{
    function getAreOfFunnyShape(r, b, h){
        return  (3.14 * r**2) + (0.5 * b * h);
    }
    let returnedArea = getAreOfFunnyShape(20, 16, 18);
    console.log(returnedArea)
}