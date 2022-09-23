// const createProductOnCart = (imgLink, imgAlt, productName, productPrice)=> {
//     const cardContainer = document.querySelector(".products-on-cart")
//     const card = document.createElement("div")
//     card.className = "card mb-3"
//     cardContainer.appendChild(card)

//     const mainRow = document.createElement("div")
//     mainRow.className = "row g-0"
//     cardContainer.appendChild(mainRow)

//     const imgContainer = document.createElement("div")
//     imgContainer.className = "col-md-4"
//     cardContainer.appendChild(imgContainer)

//     const productImg = document.createElement("img")
//     productImg.className = "img-fluid"
//     productImg.setAttribute("src", imgLink)
//     productImg.setAttribute("alt", imgAlt) 
//     imgContainer.appendChild(productImg)

//     const productInfoContainer = document.createElement("div")
//     productInfoContainer.className = "col-md-8"
//     mainRow.appendChild(productInfoContainer)

//     const cardBody = document.createElement("div")
//     cardBody.className = ("card-body")
//     productInfoContainer.appendChild(cardBody)

//     const productTitle = document.createElement("h5")
//     productTitle.className = ("card-title")
//     productTitle.innerText = productName
//     cardBody.appendChild(productTitle)

//     const productShipping = document.createElement("p")
//     productShipping.className = ("card-text shipping")
//     const shippingDays = Math.floor(Math.random()*10 + 1)
//     cardBody.appendChild(productShipping)

//     if (shippingDays == 1){
//         productShipping.innerText = `it will be shipped tomorrow`
//     }else{
//         productShipping.innerText = `it will be shipped in ${shippingDays} working days`
//     }

//     const numberOfProducts = document.createElement("p")
//     numberOfProducts.className = ("card-text")
//     cardBody.appendChild(numberOfProducts)

//     const decreaseIcon = document.createElement("i")
//     decreaseIcon.className = "fa-solid fa-trash-can"
//     numberOfProducts.appendChild(decreaseIcon)

//     const quantity = document.createElement("span")
//     quantity.className = "quantity"
//     quantity.innerText = "1"
//     numberOfProducts.appendChild(quantity)

//     const increaseIcon = document.createElement("i")
//     increaseIcon.className = "fa-solid fa-plus"
//     numberOfProducts.appendChild(increaseIcon)

//     const productTotal = document.createElement("p")
//     productTotal.className = "card-text"
//     cardBody.appendChild(productTotal)

//     const productTotalText = document.createElement("span")
//     productTotalText.innerText = "Product Total: $"
//     productTotal.appendChild(productTotalText)

//     const productTotalPrice = document.createElement("span")
//     productTotalText.className = "product-total"
//     productTotalPrice.innerText = productPrice
//     productTotal.appendChild(productTotalPrice)

//     const removeIcon = document.createElement("i")
//     removeIcon.className = "fa-solid fa-trash-can fa-2x"
//     cardBody.appendChild(removeIcon)
// }
const createProductOnCart = (productID, imgLink, imgAlt, productName, productPrice) => {
    // We created the main div and appended it to the container div
    const cardContainer = document.querySelector(".products-on-cart");
    const card = document.createElement("div");
    card.className = "card mb-3";
    card.setAttribute("id", productID)
    cardContainer.appendChild(card);

    // We cretaed the row div and appended it to the card div.
    const mainRow = document.createElement("div");
    mainRow.className = "row no-gutters";
    card.appendChild(mainRow);

    // We created the img container and appended it to the mainRow
    const imgContainer = document.createElement("div");
    imgContainer.className = "col-md-4";
    mainRow.appendChild(imgContainer);

    // Get the img
    const productImg = document.createElement("img");
    productImg.className = "card-img";
    productImg.setAttribute("src", imgLink);
    productImg.setAttribute("alt", imgAlt);
    imgContainer.appendChild(productImg);

    // We created the product info container and appended it to the mainRow
    const productInfoContainer = document.createElement("div");
    productInfoContainer.className = "col-md-8";
    mainRow.appendChild(productInfoContainer);

    // We created the card body div and appended it to the productInfoContainer
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    productInfoContainer.appendChild(cardBody);

    // We created the title and called the name parameter
    const productTitle = document.createElement("h5");
    productTitle.className = "card-title";
    productTitle.innerText = productName;
    cardBody.appendChild(productTitle);

    // Shipping info
    const productShipping = document.createElement("p");
    productShipping.className = "card-text shipping";
    const shippingDays = Math.floor(Math.random() * 10 + 1);
    if (shippingDays === 1) {
        productShipping.innerText = `It will be shipped tomorrow`;
    } else {
        productShipping.innerText = `It will be shipped within an estimated ${shippingDays} working days.`;
    }
    cardBody.appendChild(productShipping);

    // Increase or Decrease the number of products
    const numberOfProducts = document.createElement("p");
    numberOfProducts.className = "card-text products-number";
    cardBody.appendChild(numberOfProducts);

    // Decrease icon (Will become minus later)
    const decreaseIcon = document.createElement("i");
    decreaseIcon.className = "fa-regular fa-trash-can decrease-trash";
    numberOfProducts.appendChild(decreaseIcon);

    // Quantity
    const quantity = document.createElement("span");
    quantity.className = "quantity";
    quantity.innerText = "1";
    numberOfProducts.appendChild(quantity);

    // Increase Icon
    const increaseIcon = document.createElement("i");
    increaseIcon.className = "fa-regular fa-plus";
    numberOfProducts.appendChild(increaseIcon);

    // Product Total
    const productTotal = document.createElement("p");
    productTotal.className = "card-text";
    cardBody.appendChild(productTotal);
    const productTotalText = document.createElement("span");
    productTotalText.innerText = "Product Total: $";
    productTotal.appendChild(productTotalText);
    const productTotalPrice = document.createElement("span");
    productTotalPrice.className = "product-total";
    productTotalPrice.innerText = productPrice;
    productTotal.appendChild(productTotalPrice);

    // Remove icon
    const removeIcon = document.createElement("i");
    removeIcon.className = "fa-regular fa-trash-can fa-2x remove";
    cardBody.appendChild(removeIcon);
};
window.addEventListener("load", () => {
    document.querySelectorAll(".card").forEach((item) => {
        item.setAttribute("id", Math.random())
    })

})

const productList = ["hebele hübele"]

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("add-to-cart")) {

        const productID = e.target.closest(".card").getAttribute("id")
        // console.log(productID)

        const imageLink = e.target.closest(".card").querySelector("img").getAttribute("src")
        // console.log(imageLink)

        const imageAlt = e.target.closest(".card").querySelector("img").getAttribute("alt")
        // console.log(imageAlt)

        const productName = e.target.closest(".card").querySelector(".card-title").innerText
        // console.log(productName)

        const productPrice = e.target.closest(".card").querySelector(".product-price").innerText
        // console.log(productPrice)

        
        console.log(productList)
        productList.push({
            id: productID, 
            imgLink: imageLink, 
            imgAlt: imageAlt, 
            productName: productName, 
            productPrice: productPrice 
        })
        
        const productsOnCart = document.querySelector(".products-on-cart")
        productList.forEach(item =>{
            if(item.id === e.target.closest(".card").getAttribute("id")){
                
                console.log("at")
            }else{
                createProductOnCart(productID, imageLink, imageAlt, productName, productPrice)
                console.log("kafasi")
            }
        })
        
        
        


    }    
})