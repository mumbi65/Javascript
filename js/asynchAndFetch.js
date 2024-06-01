{

    // https://jsonplaceholder.typicode.com/posts

    async function getPosts(){
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let postData = await response.json()

        const postsContainer = document.getElementById("posts");
        // clear any existing content
        postsContainer.innerHTML = '';

        // loop through the fetch data
        for(i = 0; i < 100; i++){
           let newDiv = document.createElement("div");
           newDiv.innerHTML = `<h3>${postData[i].title}</h3>
           <p>${postData[i].body}</p>`

        //Adding styles directly to the divs
        newDiv.style.margin= "1rem";
        newDiv.style.borderRadius = "2rem";
        newDiv.style.backgroundColor = "lightgrey";

        postsContainer.appendChild(newDiv)
        }

    }
    getPosts()
}