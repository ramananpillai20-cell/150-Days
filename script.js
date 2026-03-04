const password = "07082025";

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
"Chilling with you",
"Exploring food with you",
"The way you dance",
"The way you show love",
"Your curves",
"Your Hips",
"Your confidence in your body",
"Your Legs",
"Your Hair",
"Your Lips",
"Ungal Muthugu",
"Ungal Pechu",
"Neenga Moochu Vidum Azhagu",
"Ungal Vekkam",
"Ungal Alaparai",
"Kusumbu",
"Koluppu",
"Un Mooku",
"Unnoda Settaigal",
"Unnoda Kolusu Pota Kaalgal",
"Nee Thoongura Azhagu",
"Your Earrings",
"Your Makeup",
"The way you glow all the time",
"The way you manage people",
"The way you love people",
"The way you take care of people",
"Your Work Ethic",
"Outlook towards life",
"The way you manage your life",
"The Boldness",
"The Calmness",
"The Sexiness",
"Savagery",
"Ungal Thummal",
"The way you light up when you see Muttai",
"The way you light up when you see Fish",
"The way you light up when you see Mallu food",
"The way you sit and watch reels",
"You shopping and falling asleep",
"You falling asleep with phone in hand",
"Unga Douser Paandi look",
"Music Taste",
"Taste in men (you chose me 😌)",
"Perseverance",
"Resilience",
"How you make people at ease",
"Being there for me day and night",
"Learning more about me each day",
"Planner Max Neenga",
"Super Efficient",
"Clean AF",
"Mookuthi",
"Unnoda Nails",
"Kutty Cute Kaigal",
"Unnoda Super Cute Height",
"Your Memory (boon or bane 😏)",
"Cuteness",
"Solluuuuuuu",
"Surya Nalla Dance Aadunaaru energy",
"Bargaining Queen",
"Vijay Anna Padame Poda Matengranga mode",
"Movie Taste",
"When you speak in Hindi",
"Un Kaalgal",
"Face la irka Machham",
"The way you take care of yourself",
"Your Rigour in life",
"Partying with you",
"Vibing with you",
"Trolling people together",
"Watching MasterChef together",
"Completing Bigg Boss seasons",
"Watching random movies",
"Watching Modern Family and seeing us",
"Your Honesty",
"Your Inclusiveness",
"Baby Voice",
"Your Stories",
"How Tech Savvy you are",
"Your habit of showing up regularly",
"Warm Light obsession",
"Food Critic Mode",
"Straightforward sometimes",
"Overthinking",
"Asking sorry for random stuff",
"Your Capacity",
"Your Priorities",
"The way you walk",
"When you're lost",
"Your Cute Snores",
"The Sleep Talks",
"Falling asleep process",
"Taking medicine every morning",
"Stubbornness",
"Diet Coke Obsession",
"Dhum Adikra Style",
"Whistle Adipathu",
"Beer bottle open panrathu",
"Gifting Pro Max",
"Rider Provider energy",
"Spontaneity",
"Heat of the moment reactions",
"Our Funky chaos",
"Your Desire",
"The way you look in a saree",
"Your Party OOTDs",
"Your Office fits",
"Curly Hair",
"Straight Hair",
"Frizzy Hair",
"Eye Makeup",
"Sunglasses look",
"Your Empathy",
"Moraippu",
"Pink Colour Koonthal",
"Your Picture Taking Skills",
"Your IG Aesthetics",
"Your IG Feed",
"The way you sing",
"Innocent Smile",
"Passenger Princess",
"The Sacrifices you do",
"The Dedication you have",
"Cranky when you miss me",
"Coimbatore slang while fighting",
"Techno Dance Moves",
"Your Boundaries",
"The way you listen",
"The effect you have on me",
"Your Lingerie Confidence",
"Your Kindness",
"Movie references max pro legend",
"Brain rot content partner",
"Introducing me to new experiences",
"How you treat my parents",
"How you treat my brother",
"Athuppu sometimes",
"The trust I feel when you’re around",
"I love you in all forms possible"
];

function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === password) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    generateReasons();
  } else {
    document.getElementById("error").innerText = "Wrong password 😜";
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
  }, 20);
}
