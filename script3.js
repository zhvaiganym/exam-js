document.addEventListener('DOMContentLoaded', function() {
    const backgroundColorInput = document.querySelector("#background-color");
    const postColorInput = document.querySelector("#post-background-color");
    const titleColorInput = document.querySelector("#title-color");
    const descriptionColorInput = document.querySelector("#description-color");
    const saveButton = document.querySelector("#saveBtn");

    const savedBackgroundColor = localStorage.getItem("backgroundColor");
    const savedPostColor = localStorage.getItem("postBackgroundColor");
    const savedTitleColor = localStorage.getItem("titleColor");
    const savedDescriptionColor = localStorage.getItem("descriptionColor");

    if (savedBackgroundColor) {
        backgroundColorInput.value = savedBackgroundColor;
    }

    if (savedPostColor) {
        postColorInput.value = savedPostColor;
    }

    if (savedTitleColor) {
        titleColorInput.value = savedTitleColor;
    }

    if (savedDescriptionColor) {
        descriptionColorInput.value = savedDescriptionColor;
    }

    saveButton.addEventListener('click', () => {
        const backgroundColor = backgroundColorInput.value;
        const postBackgroundColor = postColorInput.value;
        const titleColor = titleColorInput.value;
        const descriptionColor = descriptionColorInput.value;

        localStorage.setItem("backgroundColor", backgroundColor);
        localStorage.setItem("postBackgroundColor", postBackgroundColor);
        localStorage.setItem("titleColor", titleColor);
        localStorage.setItem("descriptionColor", descriptionColor);

        alert("Settings saved!");
    });
});
