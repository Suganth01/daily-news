const news = document.getElementById("daily");
const apiKey = '0bb9d95cf0a74171a120f110343ee718';
let link1 = document.getElementById("business");
let link2 = document.getElementById("entertainment");
let link3 = document.getElementById("health");
let link4 = document.getElementById("science");
let link5 = document.getElementById("sports");
let link6 = document.getElementById("technology");
const btn = document.getElementById("search");
const sch = document.getElementById("bt");
let link7 = document.getElementById("business-1");
let link8 = document.getElementById("entertainment-2");
let link9 = document.getElementById("health-3");
let link10 = document.getElementById("science-4");
let link11= document.getElementById("sports-5");
let link12 = document.getElementById("technology-6");
const btn1 = document.getElementById("search-7");
const sch1 = document.getElementById("bt-8");
const menubar=document.getElementById("menu");
const searchnews=document.getElementById("search-news");
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

async function fetchNews(category, title) {
    const url = `https://newsapi.org/v2/top-headlines?country=in${category ? `&category=${category}`: ''}&pageSize=14&apiKey=${apiKey}`;
    try {
        const response = await fetch(proxyUrl + url);
        console.log(response)
        if (response.status === 429) {
            alert('Too many requests. Please try again later.');
            return;
        } else if (response.ok) {
            const data = await response.json();
            console.log(data.articles);
            displayNews(data.articles, title);
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error("There is an error", error);
    }
}

function displayNews(articles, title) {
    news.innerHTML = "";

    const head = document.createElement("div");
    head.classList.add("news");
    const tips = document.createElement("h1");
    tips.textContent = `${title.toUpperCase()} NEWS`;
    head.appendChild(tips);
    news.appendChild(head);

    const grid = document.createElement("div");
    grid.classList.add("grid1");
    news.appendChild(grid);

    const grid2 = document.createElement("div");
    grid2.classList.add("grid2");
    news.appendChild(grid2);

    articles.forEach((article, i) => {
        if (i < 4) {
        const display = document.createElement("div");
        display.classList.add("photo" + (i + 1));

        const img = document.createElement("img");
        img.classList.add("n" + (i + 1));
            if (i == 0) {
                img.src = article.urlToImage || 'https://placehold.co/650x500';
            }
            else if (i == 1) {
                img.src = article.urlToImage || 'https://placehold.co/700x250'
            }
            else {
                img.src = article.urlToImage || 'https://placehold.co/350x240'
            }

            const text = document.createElement("div");
            text.classList.add("text" + (i + 1));

            const title = document.createElement("h2");
            title.textContent = article.title;
            text.appendChild(title);

            if (i < 2) {
                const description = document.createElement("p");
                description.textContent = article.description || article.content;
                text.appendChild(description);
            }

            display.appendChild(img);
            display.appendChild(text);
            display.addEventListener("click",()=>{
                window.open(article.url);     
            })

            grid.appendChild(display);
        } else {
            const grid2Display = document.createElement("div");
            grid2Display.classList.add("photo" + (i + 1));

            const grid2Img = document.createElement("img");
            grid2Img.classList.add("n" + (i + 1));
            grid2Img.src = article.urlToImage || 'https://placehold.co/600x400';
            const text = document.createElement("div");
            text.classList.add("text" + (i + 1));

            const grid2Title = document.createElement("h2");
            grid2Title.textContent = article.title;
            text.appendChild(grid2Title)


            const grid2Description = document.createElement("p");
            grid2Description.textContent = article.description || article.content;
            text.appendChild(grid2Description)

            grid2Display.appendChild(grid2Img);
            grid2Display.appendChild(text);
            grid2Display.addEventListener("click",()=>{
                window.open(article.url);

            })

            grid2.appendChild(grid2Display);
        }
    });
}
function searchAPI(info) {
    const url = `https://newsapi.org/v2/everything?q=${info}&pageSize=13&apiKey=${apiKey}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            displayNews(data.articles, info)
        })
        .catch((error) => console.log("Failed to search the content", error))
}
link1.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('business', 'BUSINESS');
});
link2.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('entertainment', 'ENTERTAINMENT');
});
link3.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('health', 'HEALTH');
});
link4.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('science', 'SCIENCE');
});
link5.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('sports', 'SPORTS');
});
link6.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('technology', 'TECHNOLOGY');
});
sch.addEventListener('click', (event) => {
    event.preventDefault();
    let r = btn.value.trim();
    console.log(r);
    if (r == "") {
        window.alert("Error enter a proper value");
        return;
    }
    searchAPI(r);
});
link7.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('business', 'BUSINESS');
});
link8.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('entertainment', 'ENTERTAINMENT');
});
link9.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('health', 'HEALTH');
});
link10.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('science', 'SCIENCE');
});
link11.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('sports', 'SPORTS');
});
link12.addEventListener('click', (event) => {
    event.preventDefault();
    fetchNews('technology', 'TECHNOLOGY');
});
sch1.addEventListener('click', (event) => {
    event.preventDefault();
    let r = btn1.value.trim();
    console.log(r);
    if (r == "") {
        window.alert("Error enter a proper value");
        return;
    }
    searchAPI(r);
});


fetchNews('', 'TOP');
menubar.addEventListener("click",a)
searchnews.addEventListener("click",a);
function a(){
    document.getElementById("nv").classList.toggle("slide");

}
