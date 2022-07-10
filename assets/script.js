const content = document.getElementById("content");

const sidebar = document.getElementById("sidebar");

[...sidebar.children[0].children].forEach((el) => {
  el.addEventListener("click", (e) => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    e.target.classList.add("active");
  });
});
