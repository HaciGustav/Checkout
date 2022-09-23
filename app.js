const createProductOnCart = (imgLink, imgAlt)=> {
    const cardContainer = document.querySelector(".products-on-cart")
    const card = document.createElement("div")
    card.className = "card mb-3"
    cardContainer.appendChild(card)
    
    const mainRow = document.createElement("div")
    mainRow.className = "row g-0"
    cardContainer.appendChild(mainRow)
    
    const imgContainer = document.createElement("div")
    imgContainer.className = "col-md-4"
    cardContainer.appendChild(imgContainer)

    const productImg = document.createElement("img")
    productImg.className = "img-fluid rounded-start"
    productImg.setAttribute("src", imgLink)
    productImg.setAttribute("alt", imgAlt) 
    imgContainer.appendChild("productImg")
    
    const productInfoContainer = document.createElement("div")
    productInfoContainer.className = "col-md-8"
    mainRow.appendChild(productInfoContainer)

    const cardBody = document.createElement("div")
    cardBody.className = ("card-body")
    productInfoContainer.appendChild(cardBody)
    
    const productTitle = document.createElement("h5")
    productTitle.className = ("card-title")
    productTitle.innerText = productName
    cardBody.appendChild(productTitle)
    
    const productShipping = document.createElement("p")
    productShipping.className = ("card-text shipping")
    const shippingDays = Math.floor(Math.random()*10 + 1)
    cardBody.appendChild(productShipping)
    
    if (shippingDays == 1){
        productShipping.innerText = `it will be shipped tomorrow`
    }else{
        productShipping.innerText = `it will be shipped in ${shippingDays} working days`
    }

    const numberOfProducts = document.createElement("p")
    numberOfProducts.className = ("card-text")
    cardBody.appendChild(numberOfProducts)

    

    



    
}