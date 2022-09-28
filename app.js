// yildizlarin class ve color i degisecek

// yildizlara mouseover ve for la style ini degistir. click ile de oyla

/* add-to-cart a event eklenecek
 --click
   div olusacak

   yeni dizayn div var
   e.targete tikladik
   2.tiklama will increase product number
   img, title, price bunlara e.target ten kendisine ait olana ulasabiliyoruz.
   yeni div in icine create ile bolumlerini olusturduk
   kopyalayacagimiz elementleri e.targetle dogru yerlere gonderdik
   It will be shipped within an estimated ${5} working days.
      ---- random
              if random === 1
   number of products bolumu olustur.
   plus minus innerText 
       if number === 1 - yerine cop iconu koy
       cop ikonuna tiklaninca uyari ver ve sil 
   Product total: fonksiyon
   hover oldugunda remove trash animasyonu ekle
   trash ile kaldir
   
   functions
   - e.target e basinca 3 degiskeni al 
   - math.random
   - sayiya gore product total hesapla
   - tum product totaller toplami = total
   - total den vergiyi ve subtotal i hesapla
   - shipping sepet bossa 0, doluysa 12$

   - urun eklenince odeme butonu ciksin  
   - sayfa ilk acilinca bos, eger urun eklenip sonra silinirse your cart is empty
*/

const addBtn = document.querySelectorAll('.add-to-cart');
let productList = ['a'];
window.onload = () => {
    addBtn.forEach((item) => {
        item.setAttribute('id', Math.random());
        // productList.push(item.getAttribute("id"));
    });
};

const iconActivities = (btn) => {
    const cardDiv = btn.closest('.card-div');
    const quant = btn.closest('.card-div').querySelector('.quantity');
    if (btn.classList.contains('fa-plus')) {
        cardDiv.querySelector('.quantity').innerText++;
        productTotalCalc(btn);
        // console.log(productList);

        if (quant.innerText > 1) {
            cardDiv.querySelector('.decrease-trash').className =
                'fa-solid fa-minus decrease-trash';
        }
    } else if (btn.classList.contains('fa-minus')) {
        if (quant.innerText == 1) {
            cardDiv.querySelector('.decrease-trash').className =
                'fa-solid fa-trash-can decrease-trash';
        } else if (quant.innerText > 1) {
            quant.innerText--;
            cardDiv.querySelector('.decrease-trash').className =
                'fa-solid fa-minus decrease-trash';
            productTotalCalc(btn);
        }
    } else if (
        btn.classList.contains('remove') ||
        btn.classList.contains('decrease-trash')
    ) {
        cardDiv.remove();
        productList = productList.filter(
            (id) => id !== cardDiv.getAttribute('id')
        );
        console.log(productList);
        productTotalCalc(btn);
    }
};

const createProductOnCart = (
    btn,
    productID,
    imgLink,
    imgAlt,
    productName,
    productPrice
) => {
    // We created the main div and appended it to the container div
    const cardContainer = document.querySelector('.products-on-cart');
    const card = document.createElement('div');
    card.className = 'card mb-3 card-div';
    card.setAttribute('id', productID);
    cardContainer.appendChild(card);
    addBtn.forEach((item) => {
        productList.push(btn.getAttribute('id'));
    });

    // We cretaed the row div and appended it to the card div.
    const mainRow = document.createElement('div');
    mainRow.className = 'row no-gutters';
    card.appendChild(mainRow);

    // We created the img container and appended it to the mainRow
    const imgContainer = document.createElement('div');
    imgContainer.className = 'col-md-4';
    mainRow.appendChild(imgContainer);

    // Get the img
    const productImg = document.createElement('img');
    productImg.className = 'card-img';
    productImg.setAttribute('src', imgLink);
    productImg.setAttribute('alt', imgAlt);
    imgContainer.appendChild(productImg);

    // We created the product info container and appended it to the mainRow
    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'col-md-8';
    mainRow.appendChild(productInfoContainer);

    // We created the card body div and appended it to the productInfoContainer
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    productInfoContainer.appendChild(cardBody);

    // We created the title and called the name parameter
    const productTitle = document.createElement('h5');
    productTitle.className = 'card-title';
    productTitle.innerText = productName;
    cardBody.appendChild(productTitle);

    // Shipping info
    const productShipping = document.createElement('p');
    productShipping.className = 'card-text shipping';
    const shippingDays = Math.floor(Math.random() * 10 + 1);
    if (shippingDays === 1) {
        productShipping.innerText = `It will be shipped tomorrow`;
    } else {
        productShipping.innerText = `It will be shipped within an estimated ${shippingDays} working days.`;
    }
    cardBody.appendChild(productShipping);

    // Increase or Decrease the number of products
    const numberOfProducts = document.createElement('p');
    numberOfProducts.className = 'card-text products-number';
    cardBody.appendChild(numberOfProducts);

    // Decrease icon (Will become minus later)
    const decreaseIcon = document.createElement('i');
    decreaseIcon.className = 'fa-regular fa-trash-can decrease-trash';
    numberOfProducts.appendChild(decreaseIcon);

    // Quantity
    const quantity = document.createElement('span');
    quantity.className = 'quantity';
    quantity.innerText = '1';
    numberOfProducts.appendChild(quantity);

    // Increase Icon
    const increaseIcon = document.createElement('i');
    increaseIcon.className = 'fa-regular fa-plus';
    numberOfProducts.appendChild(increaseIcon);

    // Product Total
    const productTotal = document.createElement('p');
    productTotal.className = 'card-text';
    cardBody.appendChild(productTotal);
    const productTotalText = document.createElement('span');
    productTotalText.innerText = 'Product Total: $';
    productTotal.appendChild(productTotalText);
    const productTotalPrice = document.createElement('span');
    productTotalPrice.className = 'product-total';
    productTotalPrice.innerText = productPrice;
    productTotal.appendChild(productTotalPrice);

    // Remove icon
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fa-regular fa-trash-can fa-2x remove';
    cardBody.appendChild(removeIcon);
};

document.querySelector('main').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productID = e.target.getAttribute('id');
        const imgSrc = e.target
            .closest('.card')
            .firstElementChild.getAttribute('src');

        const imgAlt = e.target
            .closest('.card')
            .firstElementChild.getAttribute('alt');
        const productName = e.target
            .closest('.card')
            .querySelector('.card-title').innerText;

        const productPrice = e.target
            .closest('.cart-ul')
            .querySelector('.product-price').innerText;

        if (!productList.includes(e.target.getAttribute('id'))) {
            createProductOnCart(
                e.target,
                productID,
                imgSrc,
                imgAlt,
                productName,
                productPrice
            );
        } else {
            const cardIds = e.target
                .closest('.main')
                .querySelector('.products-on-cart')
                .querySelectorAll('.card');

            cardIds.forEach((item) => {
                if (item.getAttribute('id') === e.target.getAttribute('id')) {
                    item.querySelector('.quantity').innerText++;
                }
            });
        }
    }

    iconActivities(e.target);
});

/* <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        src="https://www.boutiquesdemusees.fr/uploads/photos/23151/54760_xl.jpg"
        class="card-img"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text shipping">Kargo</p>
        <p class="card-text products-number">
          <i class="fa-solid fa-minus"></i>
          <span class="quantity">1</span>
          <i class="fa-solid fa-plus"></i>
        </p>
        <p class="card-text">
          <span>Product Total: $</span>
          <span class="product-total"></span>
        </p>
        <i class="fa-regular fa-trash-can fa-2x remove"></i>
      </div>
    </div>
  </div>
</div>; */

const productTotalCalc = (btn) => {
    const cards = document.querySelectorAll('.card-div');
    cards.forEach((item) => {
        item.querySelector('.product-total').innerText *=
            item.querySelector('.quantity').innerText;

        console.log(item.querySelector('.product-total').innerText);
    });
};
