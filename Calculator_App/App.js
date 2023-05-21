const display = document.querySelector('input[name="display"]');
let Btn = document.querySelectorAll("li button");
console.log(Btn);

/*const display = document.querySelector('input[name="display"]');

const buttons = document.querySelectorAll(".button button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "AC") {
      display.value = "";
    } else if (buttonText === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (buttonText === ".") {
      if (!display.value.includes(".")) {
        display.value += ".";
      }
    } else if (buttonText === "=") {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        alert("Invalid input");
      }
    } else {
      display.value += buttonText;
    }
  });
}*/
