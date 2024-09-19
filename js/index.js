const url = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL?select=category";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ";
const options = {
  headers: {
    apikey: key,
  },
};

// Category to image mapping
const categoryImageMap = {
  "Audio/Photo/Video Equipment": "images/camera_canon_big.webp",
  "Mobile Devices": "images/mic_square.webp",
  "Progammable Logic Devices": "images/mic_small.webp",
  "Board Games": "images/photo_studio.webp",
  "Cables & Connectors": "images/cables.webp",
  "Electronic Visual Displays": "images/vr.webp",

  // Add other categories with their respective images here
};

fetch(url, options)
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const uniqueCategories = new Set();

  cats.forEach((cat) => {
    if (!uniqueCategories.has(cat.category)) {
      uniqueCategories.add(cat.category);
      showCategory(cat); // Show only if it's not already in the Set
    }
  });
}

function showCategory(cat) {
  // Get template
  const template = document.querySelector("#categoryTemplate").content;

  // Clone template
  const clone = template.cloneNode(true);

  // Update content
  clone.querySelector("h2").textContent = cat.category;

  // Dynamically set image based on category
  const imgElement = clone.querySelector("img");
  const imageUrl = categoryImageMap[cat.category] || `images/camera_canon_big.webp`; // Use default if no mapping found
  imgElement.src = imageUrl;
  imgElement.alt = cat.category;

  // Set link to the product list page
  clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

  // Append to grid container
  document.querySelector(".grid-container").appendChild(clone);
}
