const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const img = document.querySelector("#img");
    const date = new Date().toISOString();

    if (title && description) {
        const post = {
            title: title,
            description: description,
            date: date,
            image: "",
        };

        if (img.files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                post.image = reader.result;
                savePost(post);
                clearForm();
                goToPage2();
            };
            reader.readAsDataURL(img.files[0]);
        } else {
            savePost(post);
            clearForm();
            goToPage2();
        }
    }
});

function savePost(post) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#img").value = "";
}

function goToPage2() {
    window.location.href = "index2.html";
}




