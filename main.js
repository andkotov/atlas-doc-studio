const editableNodes = document.querySelectorAll(".editable");

editableNodes.forEach((node) => {
  const syncState = () => {
    node.dataset.empty = node.textContent.trim() ? "false" : "true";
  };

  syncState();
  node.addEventListener("input", syncState);
  node.addEventListener("blur", syncState);
});

document.querySelectorAll(".tab-pill").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-pill").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelectorAll(".tool-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
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
      { duration: 240, easing: "ease-out" }
    );
  });
}
