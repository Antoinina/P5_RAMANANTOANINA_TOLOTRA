/* Control the sidebar */
const cartSidebar = document.getElementById('cart-sidebar');

function openCart() {
    cartSidebar.style.transform = "translate(0, 0)";
}

function closeCart() {
    cartSidebar.style.transform = "translate(0, -105%)";
}

/*let qtyProduct = document.querySelector("p#quantity");
let qtyNumber = 1;

function incCart() {
    nbrPdt = qtyNumber++;
    qtyProduct.innerHTML = nbrPdt;
}

function desincCart() {
    nbrPdt = qtyNumber--;
    qtyProduct.innerHTML = nbrPdt;
}*/

const productSidebar = document.querySelector('.cart-sidebar_product'),
      totalSidebar = document.getElementById('totalPrice');


/* Add articles in the sidebar cart */
if (localStorage.length == 0) {
    productSidebar.innerHTML = `
        <div class="font-italic">Il n'y aucun article dans votre panier</div>
        
        `;
}

function addCart() {
    openCart();// Open the sidebar when user click on "Ajouter au panier"

    /* Add the right articles in the cart */
    if (urlParamsProduct.has("5be1ed3f1c9d44000030b061")) {
        contessaInfo.addCartProduct();
    } else if (urlParamsProduct.has("5be1ef211c9d44000030b062")) {
        continaInfo.addCartProduct();
    } else if (urlParamsProduct.has("5be9bc241c9d440000a730e7")) {
        ikontaInfo.addCartProduct();
    } else if (urlParamsProduct.has("5be9c4c71c9d440000a730e9")) {
        c35Info.addCartProduct();
    } else if (urlParamsProduct.has("5be9c4471c9d440000a730e8")) {
        contaflexInfo.addCartProduct();
    }

    if (localStorage.length != 0) {
        document.querySelector('.font-italic').remove(); // Replace the sentence by article bloc
    }   
}





