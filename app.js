const css = document.querySelector("#cssfile");
const icon = document.querySelector("#icon");
let change = true;
icon.addEventListener("click", () => {
  if (icon.hasAttributes("fa-sun")) {
    if (change) {
      css.setAttribute("href", "styles2.css");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      change = false;
    } else {
      css.setAttribute("href", "styles.css");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      change = true;
    }
  }
});
