{

    // https://jsonplaceholder.typicode.com/posts
    let myButton = document.getElementById("myButton")
    async function getData(){
        let img = document.getElementById("myImage")
        let response = await fetch(" https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        console.log(data)
        img.src = data.message
    }

    async function getJoke(){
        let myType = document.getElementById("type")
        let mySetup = document.getElementById("setup")
        let myPunchline = document.getElementById("punchline")
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        let jokeData = await response.json()
        console.log(jokeData)

        mySetup.innerHTML = jokeData.setup
        myPunchline.innerHTML = jokeData.punchline
    }

    async function getPosts(){
        title =  document.getElementById("myTitle")
        body = document.getElementById("myBody")
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let postData = await response.json()

        let posts = ' '
        for(i = 0; i <= 100; i++){
            posts += `<div>
            <h3>${postData[i].title}</h3>
            <p>${postData[i].body}</p>
        </div>`
        document.getElementById("posts").innerHTML = posts
        }
    }
    getData()
    getJoke()
    getPosts()
    myButton.addEventListener("click", getData)
    myButton.addEventListener("click", getJoke)
}
{
    function getPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((resp) =>{
            console.log(resp)
        }).then((resp) => {
            resp.json().then((r) => {
                console.log(r)
            })
        })
    }
    getPosts
}