document.querySelectorAll(".toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});
