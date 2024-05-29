{
    
    let number = document.getElementById("myNumber");
    let count = 0
    function addNumber(){
        count++;
        number.innerHTML = count;
    }

    function resetNumber(){
        count = 0;
        number.innerHTML = count;
    }

    
}