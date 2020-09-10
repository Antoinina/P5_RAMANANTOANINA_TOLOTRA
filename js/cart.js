const cartContainer = document.querySelector(".cart"),
    showTotalBasket = document.querySelector(".totalBasket"),
    qtyItems = document.getElementById('quantity');

let nameStored = localStorage.getItem('name');
let priceStored = localStorage.getItem('price');
let imageStored = localStorage.getItem('imageUrl');
let selectStored = localStorage.getItem('select');

/* Pick up the data in the localStorage */
if (localStorage.length == 0) {
    cartContainer.innerHTML = `<div class="font-italic">Il n'y aucun article dans votre panier</div>`; // Items verification in localStorage
} else {

    cartContainer.innerHTML += `
                <img id="imageProduct--icon" src="${imageStored}"  alt="Miniature d'un appareil photo" class="col-4">
                <div class="col-7">
                    <h3 class="h6">${nameStored} / ${selectStored}</h3>
                    <p>Prix: <span class="price">${priceStored}</span>€</p>
                </div>
                `;

    showTotalBasket.innerHTML = `${priceStored}`;

}

let value = parseInt(qtyItems.value, 10); // Transform de string in input to integer
let totalBasket = 0;

function incBasketPrice() {
    value++;
    qtyItems.value = value;

    totalBasket = priceStored * value; // Calcul the basket price to the input's value
    showTotalBasket.innerHTML = `${totalBasket}`; // Update the total price to show
}

function decBasketPrice() {
    value--;
    qtyItems.value = value;

    totalBasket = totalBasket - priceStored; // Retire the item's price to the total basket
    showTotalBasket.innerHTML = `${totalBasket}`; // Update the total price to show

    // Delete items when total is 0
    if (value === 0){
        localStorage.clear();
        cartContainer.innerHTML = `<div class="font-italic">Il n'y aucun article dans votre panier</div>`;   
    }
}


(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();