{
    let button = document.getElementById("myButton")
    async function getUniversities(){
            let country = document.getElementById("myInput").value
            let response = await fetch("http://universities.hipolabs.com/search?country=" + country)
            let countryData = await response.json()

            const countryContainer = document.getElementById("countryContent");
            countryContainer.innerHTML = ''

            for( m = 0; m < 30; m++){
                let newDiv = document.createElement("div")
                newDiv.innerHTML = `<ul>
                <li>${countryData[m].name}</li>
                <li>${countryData[m].country}</li>
                <li>${countryData[m]['state-province']}</li>
                <li><a href="${countryData[m].web_pages}" target="_blank">${countryData[m].web_pages}</a></li>
            </ul>`

            newDiv.style.margin= "1rem";
            newDiv.style.borderRadius = "2rem";
            newDiv.style.backgroundColor = "lightgrey";

            countryContainer.appendChild(newDiv)
            }
    }
    // https://newsdata.io/api/1/latest?apikey=pub_45352cf468cbb1bb6fcf16d48a87ef6f2229d&q=pizza

    // https://newsdata.io/api/1/latest?apikey=pub_45352cf468cbb1bb6fcf16d48a87ef6f2229d&language=en

    // https://newsdata.io/api/1/archive?apikey=pub_45352cf468cbb1bb6fcf16d48a87ef6f2229d&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25

    getUniversities()
    button.addEventListener("click", getUniversities)
}