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
  const uniqueCategories = new Set(); // To track unique categories

  cats.forEach((cat) => {
    if (!uniqueCategories.has(cat.category)) {
      uniqueCategories.add(cat.category); // Add to Set
      showCategory(cat); // Display only if not already in Set
    }
  });
}

function showCategory(cat) {
  //Grab Template
  const template = document.querySelector("template").content;
  //Clone
  const clone = template.cloneNode(true);
  //Change content
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `html/productlist.html?category=${cat.category}`;
  //Append
  document.querySelector(".catList ol").appendChild(clone);
}
