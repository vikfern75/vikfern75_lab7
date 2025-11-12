function showMessage() {
  const input = document.getElementById("entryinput").value;
  const output = document.getElementById("output");

  if (input.trim() === "") {
    output.textContent = "Please enter something!";
  } else {
    output.textContent = `You entered: ${input}`;
  }
}
