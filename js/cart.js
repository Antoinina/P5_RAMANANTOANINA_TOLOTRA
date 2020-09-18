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
let totalBasket = priceStored;

// To increment the basket
function incBasketPrice() {
    value++;
    qtyItems.value = value;

    totalBasket = priceStored * value; // Calcul the basket price to the input's value
    showTotalBasket.innerHTML = `${totalBasket}`; // Update the total price to show

    return totalBasket;
}


//To decrement the basket
function decBasketPrice() {
    value--;
    qtyItems.value = value;

    totalBasket = totalBasket - priceStored; // Retire the item's price to the total basket
    showTotalBasket.innerHTML = `${totalBasket}`; // Update the total price to show

    // Delete items when total is 0
    if (value === 0) {
        localStorage.clear(); // Delete items in the localStorage
        totalBasket = 0;
        showTotalBasket.innerHTML = `${totalBasket}`;
        cartContainer.innerHTML = `<div class="font-italic">Il n'y aucun article dans votre panier</div>`;
    }

    return totalBasket;
}


const urlPost = "http://localhost:3000/api/cameras/order";

let emailInput = document.getElementById("Email"),
    firstNameInput = document.getElementById("firstName"),
    lastNameInput = document.getElementById("lastName"),
    adressInput = document.getElementById("adress"),
    zipcodeInput = document.getElementById("zipcode"),
    cityInput = document.getElementById("city"),
    countryInput = document.getElementById("country"),
    phoneNumberInput = document.getElementById("phone");

// Verify informations in the client side
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (e) {
                if (form.checkValidity() === false) {
                    e.preventDefault(); // Stop the form sending
                    e.stopPropagation();
                }
                form.classList.add('was-validated');

                let intBasket = parseInt(totalBasket, 10);

                //Create object of data from the form
                let contactInput = {
                    email: emailInput.value,
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    adress: adressInput.value,
                    zipcode: zipcodeInput.value,
                    city: cityInput.value,
                    country: countryInput.value,
                    phone: phoneNumberInput.value,
                };
                async function postOrder() {

                    //Create object of the cart's data
                    let productPost = [];

                    try {
                        let response = await fetch(urlPost, {
                            method: 'POST',
                            headers: new Headers({
                                "Content-Type": "application/json",
                            }),
                            body: JSON.stringify({
                                contact: contactInput,
                                products: productPost,
                            }),
                        });
                        return await response.json();
                    }
                    catch (error) {
                        const formProduct = document.querySelector("section"),
                            cartForm = document.querySelector("aside"),
                            mainProduct = document.querySelector("main");
                        mainProduct.removeChild(formProduct);
                        mainProduct.removeChild(cartForm);
                        page404Cart(mainProduct);
                        return console.log(error);
                    }

                }


                postOrder().then(function() {
                    localStorage.clear(); //Delete order informations
                    localStorage.setItem("formData", JSON.stringify(contactInput));
                    localStorage.setItem("orderID", JSON.stringify(contactInput));
                    localStorage.setItem("totalBasket", intBasket);

                    if(localStorage.getItem("formData") !== null){
                        window.location.href="confirmation.html";
                    }
                });
            });
        });
    });
})();

