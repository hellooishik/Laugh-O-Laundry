document.addEventListener("DOMContentLoaded", function () {
  const bubblesContainer = document.querySelector(".bubbles-container");

  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = `${Math.random() * 100 + 20}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    bubblesContainer.appendChild(bubble);
  }
});
