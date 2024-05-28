{
    const heading = document.getElementById("myh3")
    heading.style.color = "blue"
    heading.style.fontSize = "3rem"

    const button = document.getElementById("myButton")

    function changeText(){
        heading.innerText = `Hello Dom`;
        heading.style.color = "red"
        heading.style.fontSize = "4rem"
    }

    button.addEventListener("click", changeText)
    

}