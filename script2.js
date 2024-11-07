    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postsContainer = document.querySelector("#posts-container");
    const sortOldestButton = document.querySelector("#sort-oldest");
    const sortNewestButton = document.querySelector("#sort-newest");
    const weather_temp = document.querySelector("#weather");

    sortOldestButton.addEventListener('click', () => {
        displayPosts(posts.sort((a, b) => new Date(a.date) - new Date(b.date)));
    });

    sortNewestButton.addEventListener('click', () => {
        displayPosts(posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    });

    function displayPosts(posts) {
        postsContainer.innerHTML = '';

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const container = document.createElement("div");
            container.className = "container";

            const con1 = document.createElement("div");
            const icon = document.createElement("div");
            const b = document.createElement("b");
            b.innerText = "Aiganym Zhanaidarova";
            con1.className = "con1";
            icon.className = "icon";

            const con2 = document.createElement("div");
            con2.className = "con2";

            const title = document.createElement("h3");
            title.innerText = post.title;

            const description = document.createElement("span");
            description.innerText = post.description;

            const date = document.createElement("small");
            date.innerText = new Date(post.date).toLocaleString();

            const img = document.createElement("img");
            img.className = "image";
            img.src = post.image;

            const deleteButton = document.createElement("button");
            deleteButton.className = "btn2";
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", () => deletePost(i));

            container.appendChild(con1);
            container.appendChild(con2);
            container.appendChild(deleteButton);
            con1.appendChild(icon);
            con1.appendChild(b);
            con2.appendChild(title);
            con2.appendChild(description);
            con2.appendChild(date);
            con2.appendChild(img);

            postsContainer.appendChild(container);
        }

        applySettings();
    }

// Функция для удаления поста
    function deletePost(index) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.reload();
    }

// Функция для применения настроек из localStorage
    function applySettings() {
        const BackgroundColor = localStorage.getItem("backgroundColor");
        const PostBackgroundColor = localStorage.getItem("postBackgroundColor");
        const TitleColor = localStorage.getItem("titleColor");
        const DescriptionColor = localStorage.getItem("descriptionColor");

        if (BackgroundColor) {
            document.body.style.backgroundColor = BackgroundColor;
        }

        if (PostBackgroundColor) {
            const containers = document.querySelectorAll(".container");
            for (let i = 0; i < containers.length; i++) {
                containers[i].style.backgroundColor = PostBackgroundColor;
            }
        }

        if (TitleColor) {
            const titles = document.querySelectorAll("h3");
            for (let i = 0; i < titles.length; i++) {
                titles[i].style.color = TitleColor;
            }
        }

        if (DescriptionColor) {
            const descriptions = document.querySelectorAll("span");
            for (let i = 0; i < descriptions.length; i++) {
                descriptions[i].style.color = DescriptionColor;
            }
        }
    }

    displayPosts(posts);



// Функция для получения и отображения погоды 
async function getWeather(cityName) {
    const API_KEY = "7fdfc376daf8ae94da50c3dcd0733332";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const result = await response.json();
    return result;
}

async function displayWeather() {
    const weather = await getWeather("Almaty");
    weather_temp.innerHTML = `${weather.name}, ${Math.round(weather.main.temp)}°C`;
}
    
displayWeather();