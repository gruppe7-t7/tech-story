

//https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ

fetch("https://fsrafghnuwucejlumrfc.supabase.co/rest/v1/TSL?id=eq.1", {
    method:"GET",
    headers:{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcmFmZ2hudXd1Y2VqbHVtcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDA3NjIsImV4cCI6MjA0MTU3Njc2Mn0.4g8Sc1iQ7MD4QS3wht4oT3dRTGUJgy2cvdrU8G1K0GQ"
    }
})


.then(res=>res.json())
.then(showData)

function showData(items){
    console.log(items);
    document.querySelector(".view_product .productname").textContent=product.productname
    document.querySelector(".view_product .brand").textContent=product.brand
    document.querySelector(".view_product .item").textContent=product.item
    document.querySelector(".view_product .type").textContent=product.type
    document.querySelector(".view_product .category").textContent=product.category
    document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

    
}


