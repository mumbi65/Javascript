{
    
    const button = document.getElementById("demoButton");

    let defaultBGcolor = true

    function changeBackground(){
        // document.body.style.backgroundColor = "lightblue"
        if(defaultBGcolor){
            document.body.style.backgroundColor = "lightblue"
            defaultBGcolor = false
        }else{
            document.body.style.backgroundColor = "white"
            defaultBGcolor = true
        }
    }

    function changeTextBackground(){
        
        let myheading = document.getElementById("myH1")
        myheading.style.color = "lightgrey"
    }

    function changeBack(){
        document.getElementById("myH1").style.color = "black"
    }

    function changeBackBackground(){
        const body = document.getElementsByTagName("body")
        body.style.backgroundColor = "white"
    }

    button.addEventListener('click', changeBackground)
    button.addEventListener('mouseover', changeTextBackground)
    button.addEventListener('mouseout', changeBack)
    button.addEventListener('click', changeBackBackground)

    
    
    
    
}