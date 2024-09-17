window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
}

// MOTOR FETCH
const url = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ";
const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(showData)
  .catch((error) => console.error("Error fetching data:", error));

function showData(data) {
  console.log(data);
  showProducts(data); // Make sure to call showProducts here
}

function showProducts(products) {
  // Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  // Fange template
  const template = document.querySelector("#smallProductTemplate").content;
  // Lav en kopi
  const copy = template.cloneNode(true);

  // Ændre indhold
  copy.querySelector("img").src = product.image || "camera.jpg"; // Set product image or default
  copy.querySelector("h2").textContent = product.productname;
  copy.querySelector("h3").textContent = product.category;
  copy.querySelector(".brandName").textContent = product.brand;
  copy.querySelector(".subCategory").textContent = product.type;

  // Appende
  document.querySelector("section").appendChild(copy); // Append to <section> instead of <main>
}
