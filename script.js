document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("alertDiv");
    const input = document.getElementById("myInput");
    const headline = document.getElementById("myHeadline");

    btn.addEventListener("click", function () {
        const text = input.value.trim();

        // Show alert with name + input text
        alert("Viktor Fernandez: " + text);

        // Update headline with input text only
        headline.textContent = text || "Show results here";
    });

});
