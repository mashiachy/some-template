import './app.css'

document.querySelector("#button-main").addEventListener("click", () => {
  document.querySelector("#text-main").setAttribute("data-after-content", "Buy!");
});
