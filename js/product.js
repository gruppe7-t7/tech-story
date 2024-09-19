//https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ
// const supaBase = "https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL?id=eq.${id}`;

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  items.forEach((item) => {
    document.querySelector(".view_product .productname").textContent = item.productname;
    document.querySelector(".view_product .brand").textContent = item.brand;
    document.querySelector(".view_product .item").textContent = item.item;
    document.querySelector(".view_product .type").textContent = item.type;
    document.querySelector(".view_product .category").textContent = item.category;
  });
}
