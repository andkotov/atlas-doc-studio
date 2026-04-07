document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".tab-pill").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-pill").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

const shareButton = document.querySelector(".share-btn");
if (shareButton) {
  shareButton.addEventListener("click", () => {
    shareButton.animate(
      [
        { transform: "translateY(0) scale(1)" },
        { transform: "translateY(-1px) scale(1.01)" },
        { transform: "translateY(0) scale(1)" }
      ],
      { duration: 220, easing: "ease-out" }
    );
  });
}
