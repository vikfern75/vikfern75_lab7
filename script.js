function init(){
//add your javascrip between these two lines of code
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("alertDiv");
    const input = document.getElementById("myInput");
    const headline = document.getElementById("myHeadline");

    btn.addEventListener("click", function () {
        const text = input.value;

        // Show alert with your name + input text
        alert("Viktor Fernandez: " + text);

        // Set H2 text to the input value only
        headline.textContent = text;
    });

});

 







window.addEventListener('load', init);
