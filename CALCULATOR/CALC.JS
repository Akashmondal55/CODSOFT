const buttons = document.querySelectorAll("span");
const value = document.getElementById("display");
const themeCheckbox = document.getElementById("theme");
const body = document.querySelector("body");

themeCheckbox.onclick = () => {
  body.classList.toggle("dark");
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {//for buuton to create light and dark theme
    try {
      if (this.innerText === "C") {
        value.innerText = "";
      } else if (this.innerText === "=") {
        value.innerText = eval(value.innerText);
      } else {
        value.innerText += this.innerText;
      }
    } catch (error) {
      value.innerText = "Invalid";
    }
  });
});

