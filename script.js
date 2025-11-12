document.addEventListener("DOMContentLoaded", () => {
  const alertBtn = document.getElementById("alertBtn");
  const userInput = document.getElementById("userInput");
  const headline = document.getElementById("headline");

  alertBtn.addEventListener("click", () => {
    const inputValue = userInput.value.trim();

    if (inputValue === "") {
      alert("Please enter some text!");
      return;
    }

    alert(`Viktor Fernandez: ${inputValue}`);
    headline.textContent = inputValue;
  });
});
