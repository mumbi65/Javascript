{
    //  myPromise = new Promise(function(myResolver, myReject){
    //    myResolver("Resolving a fake promise")
    // });

    // myPromise.then(
    //     function(value){console.log(value)})
}

{
    const posts = [
        {title: 'Post One', body: 'This is post one'},
        {title: 'Post Two', body: 'This is post two'}
    ]

    function getPosts(){
        setTimeout(() => {
            let output = ''
            posts.forEach((post) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById("myUl").innerHTML = output
        }, 2000)
    }

    function createPosts(post){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post)
                const error = false

                if(!error){
                    resolve("OK")
                }else{
                    reject("Error")
                }
            
            }, 2000) 
        })
        
    }

    getPosts()
    createPosts({title: "Post 3", body: "This is post 3"}).then((resp) => {
        getPosts()
        console.log(resp)
    }).catch((err) =>{
        console.log(err)
    })

    async function createShowPost(){
        await createPosts({title: "Post 3", body: "This is post 3"})
        getPosts()
    }
}