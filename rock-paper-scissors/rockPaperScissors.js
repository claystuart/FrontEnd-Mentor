document.getElementById("rules_button").addEventListener("click", (e) => {
  toggleContainers();
});

document.getElementById("rules_exit_button").addEventListener("click", (e) => {
  toggleContainers();
});

function toggleContainers() {
  let rules = document.getElementById("rules-container");
  let container = document.getElementById("container");

  container.classList.toggle("hide");
  rules.classList.toggle("hide");
}
