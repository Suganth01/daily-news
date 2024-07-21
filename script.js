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
let link11 = document.getElementById("sports-5");
let link12 = document.getElementById("technology-6");
const btn1 = document.getElementById("search-7");
const sch1 = document.getElementById("bt-8");
const menubar = document.getElementById("menu");
const searchnews = document.getElementById("search-news");
const proxyUrl = 'https://api.allorigins.win/get?url=';

async function fetchNews(category, title) {
    const url = `https://newsapi.org/v2/top-headlines?country=in${category ? `&category=${category}` : ''}&pageSize=14&apiKey=${apiKey}`;
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        const data = await response.json();
        const articles = JSON.parse(data.contents).articles;
        console.log(articles);
        displayNews(articles, title);
    } catch (error) {
        console.error("There is an error", error);
    }
}
function displayNews(articles, title) {
    // Clear existing content
    news.innerHTML = "";

    // Create and append the section heading
    const head = document.createElement("div");
    head.classList.add("news");
    const tips = document.createElement("h1");
    tips.textContent = `${title.toUpperCase()} NEWS`;
    head.appendChild(tips);
    news.appendChild(head);

    // Create and append two grid containers
    const grid = document.createElement("div");
    grid.classList.add("grid1");
    news.appendChild(grid);

    const grid2 = document.createElement("div");
    grid2.classList.add("grid2");
    news.appendChild(grid2);

    // Loop through the articles and create HTML elements
    articles.forEach((article, i) => {
        const display = document.createElement("div");
        const img = document.createElement("img");
        const text = document.createElement("div");
        const titleElement = document.createElement("h2");
        const description = document.createElement("p");

        // Common class and properties for display and image
        display.classList.add("photo" + (i + 1));
        img.classList.add("n" + (i + 1));
        img.src = article.urlToImage || 'https://placehold.co/600x400';
        text.classList.add("text" + (i + 1));
        titleElement.textContent = article.title;
        description.textContent = article.description || article.content;

        // Append title and description if within grid1 or grid2
        text.appendChild(titleElement);
        text.appendChild(description);

        display.appendChild(img);
        display.appendChild(text);
        display.addEventListener("click", () => {
            window.open(article.url);
        });

        // Append to appropriate grid based on index
        if (i < 4) {
            grid.appendChild(display);
        } else {
            grid2.appendChild(display);
        }
    });
}



function searchAPI(info) {
    const url = `https://newsapi.org/v2/everything?q=${info}&pageSize=13&apiKey=${apiKey}`;
    fetch(proxyUrl + encodeURIComponent(url))
        .then((res) => res.json())
        .then((data) => {
            const articles = JSON.parse(data.contents).articles;
            displayNews(articles, info);
        })
        .catch((error) => console.log("Failed to search the content", error));
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
    if (r == "") {
        window.alert("Error enter a proper value");
        return;
    }
    searchAPI(r);
});

fetchNews('', 'TOP');
menubar.addEventListener("click", a);
searchnews.addEventListener("click", a);
function a() {
    document.getElementById("nv").classList.toggle("slide");
}
