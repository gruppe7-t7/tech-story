//https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ
const supaBase = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL";
fetch("https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL?item=eq.1", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  document.querySelector(".view_product .productname").textContent =
    items.productname;
  document.querySelector(".view_product .brand").textContent = items.brand;
  document.querySelector(".view_product .item").textContent = items.item;
  document.querySelector(".view_product .type").textContent = items.type;
  document.querySelector(".view_product .category").textContent = items.category;
  /*  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`; */
}
