const password = "051026";

let revealedCount = 0;
let autoScrollInterval;

const reasons = [
"Your Eyes",
"Your Smile",
"Your Heart",
"Your Touch",
"Your Anger",
"Your Cooking",
"Your Food Choices",
"Your Aesthetic",
"Your Fashion Sense",
"Your Sense of Humour",
// ADD ALL 150 HERE
];

function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === password) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    generateReasons();
  } else {
    document.getElementById("error").innerText = "Wrong secret 😜";
  }
}

function generateReasons() {
  const container = document.getElementById("reasons-container");

  reasons.forEach((reason, index) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerText = "Reason #" + (index + 1);

    card.onclick = function () {
      if (!card.classList.contains("revealed")) {
        card.innerText = "Reason #" + (index + 1) + ": " + reason;
        card.classList.add("revealed");
        revealedCount++;

        if (revealedCount === 5) {
          showViewAllButton();
        }
      }
    };

    container.appendChild(card);
  });
}

function showViewAllButton() {
  const btn = document.createElement("button");
  btn.innerText = "View All 150 💖";
  btn.id = "viewAllBtn";
  btn.onclick = revealAll;
  document.getElementById("main-content").appendChild(btn);
}

function revealAll() {
  const cards = document.querySelectorAll(".reason-card");

  cards.forEach((card, index) => {
    card.innerText = "Reason #" + (index + 1) + ": " + reasons[index];
    card.classList.add("revealed");

    if (index === 149) {
      card.style.background = "#ffe0f5";
      card.style.boxShadow = "0 0 20px #ff9ecf";
    }
  });

  startAutoScroll();
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    window.scrollBy(0, 1);

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      clearInterval(autoScrollInterval);
    }
  }, 30);
}