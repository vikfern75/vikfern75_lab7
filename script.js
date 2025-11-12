function init() {
    const button = document.getElementById("alertButton"); // match HTML ID
    const input = document.getElementById("entryinput");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function() {
        const usertext = input.value;
        alert("Viktor Fernandez: " + usertext);

        output.textContent = usertext; // fixed capitalization
    });
}

window.addEventListener('load', init);
