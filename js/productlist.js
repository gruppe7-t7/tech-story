window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// Base URL for Supabase query
let url = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL";

// Supabase API key
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ";

// Set up options with headers
const options = {
  headers: {
    apikey: key,
  },
};

// If a category is selected, add a filter to the URL
if (category) {
  url += `?category=ilike.${encodeURIComponent(category)}`; // Use 'ilike' for case-insensitive filtering
}

// Log the final URL for debugging
console.log("Fetching products from URL:", url);

// Fetch data from Supabase, filtered by category if applicable
fetch(url, options)
  .then((res) => {
    console.log("Response status:", res.status); // Log response status
    return res.json();
  })
  .then(showData)
  .catch((error) => console.error("Error fetching data:", error));

function showData(data) {
  console.log("Fetched data:", data); // Log the data fetched

  // Get the category heading and description elements
  const categoryHeading = document.querySelector("#categoryInfo h2");
  const categoryDescription = document.querySelector("#categoryInfo p");

  if (data.length === 0) {
    console.log("No products found for this category.");
    // Optionally show a message when no products are found
    document.querySelector("section").innerHTML = "<p>No products found in this category.</p>";
    categoryHeading.textContent = "No category selected";
    categoryDescription.textContent = "Please select a category to see the available products.";
  } else {
    // Update heading and description based on the category
    if (category) {
      categoryHeading.textContent = `${category}`;
      categoryDescription.textContent = `Her finder du alle diverse produkter indenfor ${category}, som du kan få brug for på dine kommende projekter..`;
    } else {
      categoryHeading.textContent = "Alle Produkter";
      categoryDescription.textContent = "Her finder du alle de produkter, du kan leje hos Tech og Story Lab";
    }

    showProducts(data); // Call showProducts with the data
  }
}

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  // Grab the template
  const template = document.querySelector("#smallProductTemplate").content;
  // Create a copy of the template
  const copy = template.cloneNode(true);

  // Change the content
  copy.querySelector("h3").textContent = product.productname;
  copy.querySelector("h4").textContent = product.category;
  copy.querySelector(".brandName").textContent = product.brand;
  copy.querySelector(".subCategory").textContent = product.type;

  // Append the product to the section
  document.querySelector("section").appendChild(copy);
}
