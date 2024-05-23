{
    function validateInput(){
        let myInput = document.getElementById("numb");

        let userValue = myInput.value

        if (isNaN(userValue) || !(userValue >= 1 && userValue <=10)){
            alert("Wrong input")
        }
        else{
            alert("Correct")
        }
    }

    function changeToUpperCase(){
        let myInput = document.getElementById("numb")
        myInput.value = myInput.value.toUpperCase()
    }
}