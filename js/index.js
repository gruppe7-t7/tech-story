const url = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL?select=category";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ";
const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const uniqueCategories = new Set(); // For unikke kategorier

  cats.forEach((cat) => {
    if (!uniqueCategories.has(cat.category)) {
      uniqueCategories.add(cat.category); // Tilføj til Set
      showCategory(cat); // Vis kun, hvis den ikke allerede er i Set
    }
  });
}

function showCategory(cat) {
  // Hent template
  const template = document.querySelector("#categoryTemplate").content;

  // Klon template
  const clone = template.cloneNode(true);

  // Tilpas indhold
  clone.querySelector("h2").textContent = cat.category;
  clone.querySelector("img").src = `images/${cat.category.toLowerCase()}.webp`; // Dynamisk billede baseret på kategori
  clone.querySelector("img").alt = cat.category;
  clone.querySelector("a").href = `html/productlist.html?category=${cat.category}`;

  // Append til grid-container
  document.querySelector(".grid-container").appendChild(clone);
}
