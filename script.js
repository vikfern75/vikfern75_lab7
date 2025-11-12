function init(){
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const usertext = input.value;
      alert("Viktor Fernandez: " + usertext);

    output.textcontent = userText;
   
  });
}

window.addEventListener('load', init);
