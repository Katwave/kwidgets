// Animation on click on the inputs
const input = document.getElementsByTagName("input");
const label = document.getElementsByTagName("label");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    label[i].style = "top: 0px";
  });
  if (input[i].value) {
    label[i].style = "top: 0px";
  }
}
