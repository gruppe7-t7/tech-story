const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then(response=>response.json())
.then((data)=>showProduct(data));


function showProduct(product){    
    console.log(product);
    document.querySelector(".view_product .productname").textContent=product.productname
    document.querySelector(".view_product .brand").textContent=product.brand
    document.querySelector(".view_product .item").textContent=product.item
    document.querySelector(".view_product .type").textContent=product.type
    document.querySelector(".view_product .category").textContent=product.category
    document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

}
