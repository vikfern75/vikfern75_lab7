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
    alert(`Viktor Fernandez: ${text}`);
    result.textContent = text;
  });
});
