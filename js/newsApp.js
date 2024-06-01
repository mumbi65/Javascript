{
    async function getNews() {
        try {
            //let response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_45352cf468cbb1bb6fcf16d48a87ef6f2229d&language=en");
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            let newsData = await response.json();
            console.log(newsData);
    
            let newsContainer = document.getElementById("news");
    
            for (let n = 0; n < newsData.results.length; n++) {
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `
                <div>
                    <h1>${newsData.results[n].category[0]}</h1>
                    <p>${newsData.results[n].content}</p>
                    <p>${newsData.results[n].country[0]}</p>
                    <p>${newsData.results[n].creator}</p>
                    <p>${newsData.results[n].language}</p>
                    <a href="${newsData.results[n].link}">Link</a>
                    <h4>${newsData.results[n].title}</h4>
                    <p>${newsData.results[n].description}</p>
                    <img src="${newsData.results[n].image_url}" alt="">
                    <video src=""></video>
                </div>`;
                newsContainer.appendChild(newDiv);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    
    getNews();
    
}

// https://newsdata.io/api/1/latest?apikey=pub_45352cf468cbb1bb6fcf16d48a87ef6f2229d&q=pizza