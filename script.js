document.addEventListener("DOMContentLoaded", function() {
  const alertDiv = document.getElementById("alertDiv");
  const input = document.getElementById("userInput");
  const result = document.getElementById("result");

  alertDiv.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") {
      alert("Please enter a message.");
      return;
    }
    // Show alert with your name and input
    alert(`Viktor Fernandez: ${text}`);
    // Update the h2 text
    result.textContent = text;
  });
});
