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

document.querySelectorAll(".qty button").forEach((button) => {
  button.addEventListener("click", () => {
    const qtySpan = button.parentElement.querySelector("span");
    let qty = parseInt(qtySpan.textContent);
    if (button.textContent === "+") {
      qty++;
    } else if (button.textContent === "-" && qty > 0) {
      qty--;
    }
    qtySpan.textContent = qty;
    calculateTotal();
  });
});

const prices = {
  "SINGLE BED SHEET": [15, 25, 50, 10],
  "DOUBLE BED SHEET": [15, 25, 50, 10],
  BLANKET: [15, 25, 50, 10],
  "PILLOW COVERS": [15, 25, 50, 10],
  "TABLE MATS": [15, 25, 0, 10],
  "TOWEL BATH": [15, 25, 0, 10],
  CURTAIN: [30, 50, 75, 20],
  "SHIRT / T-SHIRT": [15, 25, 50, 10],
  "HALF PANT": [15, 25, 0, 10],
  "FULL PANT": [15, 25, 50, 10],
  FROCK: [15, 25, 50, 10],
  BLAZER: [15, 25, 0, 10],
  "GIRLS LAHENGA": [30, 50, 75, 20],
  "JEANS / TROUSER": [15, 25, 50, 10],
  PYJAMA: [15, 25, 50, 10],
  "CASUAL PANT": [15, 25, 50, 10],
  "SPORTS WEAR": [15, 25, null, 10],
  "DHOTI / LUNGI": [30, 50, 75, 20],
  SHERWANI: [40, 60, 80, 20],
  "JACKET / SWEAT SHIRT": [40, 60, 80, 20],
  "WINTER JACKET": [null, null, 120, null],
  "WOOLEN JACKET": [40, null, 100, 15],
  KURTA: [20, 30, 50, 15],
  VEST: [10, 20, null, 10],
  "HANKY / SOCKS": [10, 20, null, 10],
  "BLAZER / SUIT": [null, null, 120, 35],
  "SUIT 2PC": [null, null, 120, null],
  DUPATTA: [20, 20, 50, 15],
  STOLE: [20, 20, 50, 15],
  SCARF: [20, 20, 50, 15],
  GLOVES: [10, 10, 20, 10],
  SWEATER: [20, 20, 50, 10],
  LEGGINGS: [20, 25, 40, 10],
  BLOUSE: [15, 20, 40, 10],
  PETTICOAT: [10, 15, 25, 10],
  NIGHTY: [20, 25, 50, 10],
  SKIRT: [15, 25, 50, 10],
};

function calculateTotal() {
  let totalPrice = 0;
  document.querySelectorAll("tbody tr").forEach((row) => {
    const item = row.children[0].textContent.trim();
    if (prices[item]) {
      const qtys = row.querySelectorAll(".qty span");
      for (let i = 0; i < qtys.length; i++) {
        const price = prices[item][i] || 0;
        const qty = parseInt(qtys[i].textContent);
        totalPrice += price * qty;
      }
    }
  });
  document.getElementById("total-price").textContent = totalPrice;
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("Total Price: ₹" + document.getElementById("total-price").textContent);
});

calculateTotal();
