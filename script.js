document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded - script.js running");

    const btn = document.getElementById("alertDiv");
    const input = document.getElementById("myInput");
    const headline = document.getElementById("myHeadline");

    if (!btn || !input || !headline) {
        console.error("One or more elements not found:", { btn, input, headline });
        return;
    }

    // Click handler
    function handleClick() {
        const text = input.value; 
        console.log("Alert button clicked. Input value:", text);

        // Show alert with name + input text
        alert("Viktor Fernandez: " + text);

        headline.textContent = text;
    }

    btn.addEventListener("click", handleClick);

    btn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    });
});
