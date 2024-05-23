{
    function changeText(){
        let myPara = document.getElementById("demo-text")
        myPara.innerHTML = `<p>Hello World</p>`
        myPara.style.color = "lightgray"
    }

    function returnText(){
        let mypara = document.getElementById("demo-text")
        mypara.innerHTML = `<p>Niaje mafans</p>`
        mypara.style.color = "black"
    }
}