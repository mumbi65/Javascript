{

    const myh1 = document.getElementById("myHeading")
    const button = document.getElementById("myButton")

    let textColor = true
    function changeStyleH1(){
        // myh1.className = "heading2"
        if(textColor){
            myh1.className = "heading2"
            textColor = false;
        }else{
            myh1.className = "heading1"
            textColor = true
        }
    }
}