{
    const posts = [
        {title: 'Post One', body: 'This is post one'},
        {title: 'Post Two', body: 'This is post two'}
    ]
   let  mybutton = document.getElementById("myButton")
   let count = 2

    function getPosts(){
        setTimeout(() => {
            let output = ''
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById("myUl").innerHTML = output
        }, 2000)
    }

    function createPosts(post, callback){
        setTimeout(() => {
            posts.push(post)
            callback()
        }, 2000)
    }

    getPosts()

    mybutton.addEventListener("click", function(){
        count++
        newPost = {title: `Post${count}`, body: `This is post ${count}`}
        createPosts(newPost, getPosts)
    })

}