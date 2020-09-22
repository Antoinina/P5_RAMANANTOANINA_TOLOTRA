const cartContainer = document.querySelector(".cart"),
    totalContainer = document.querySelector(".totalBasket"),
    qtyItems = document.getElementById('quantity');

const url = "http://localhost:3000/api/cameras",
    urlPost = "http://localhost:3000/api/cameras/order";

let arrayCart = []; // Create an array to stock the item from teh localStorage

// Put all items in array
for (i = 0; i < localStorage.length; i++) {
    arrayCart.push(localStorage[i]);
}

const nameStored = localStorage.getItem("nameProduct"),
    priceStored = localStorage.getItem("priceProduct"),
    imgStored = localStorage.getItem("imageProduct"),
    lensStored = localStorage.getItem("lens");

function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

const orderId = hasard(112225,25549883);


if (arrayCart != null) {
    cartContainer.innerHTML = `
                <img id="imageProduct--icon" src="${imgStored}"  alt="Miniature d'un appareil photo" class="col-4">
                <div class="col-7">
                    <h3 class="h6">${nameStored} / ${lensStored}</h3>
                    <p>Prix: <span class="price">${priceStored}</span>€</p>
                </div>
                
                `;
    totalContainer.innerHTML = `${priceStored}`;
} else {
    cartContainer.innerHTML = `<p class="font-italic">Il n'y aucun article dans votre panier</p>`;
}

let value = parseInt(qtyItems.value, 10), // Transform de string in input to integer
    totalBasket = priceStored;

// To increment the basket
function incBasketPrice() {
    value++;
    qtyItems.value = value;

    totalBasket = priceStored * value; // Calcul the basket price to the input's value
    totalContainer.innerHTML = `${totalBasket}`; // Update the total price to show

    return totalBasket;
}


//To decrement the basket
function decBasketPrice() {
    value--;
    qtyItems.value = value;

    totalBasket = totalBasket - priceStored; // Retire the item's price to the total basket
    totalContainer.innerHTML = `${totalBasket}`; // Update the total price to show

    // Delete items when total is 0
    if (value === 0) {
        localStorage.clear(); // Delete items in the localStorage
        arrayCart.splice(0, arrayCart.length); // Clear the array
        totalBasket = 0;
        totalContainer.innerHTML = `${totalBasket}`;
        cartContainer.innerHTML = `<div class="font-italic">Il n'y aucun article dans votre panier</div>`;
    }

    return totalBasket;
}


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
                    try {
                        let response = await fetch(urlPost, {
                            method: 'POST',
                            headers: new Headers({
                                "Content-Type": "application/json",
                            }),
                            body: JSON.stringify({
                                contact: contactInput,
                                products: arrayCart,
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

                postOrder().then(function () {
                    localStorage.clear(); // Delete order informations
                    arrayCart.splice(0, arrayCart.length);
                    localStorage.setItem("orderData", JSON.stringify(orderId));
                    localStorage.setItem("formData", JSON.stringify(contactInput));
                    localStorage.setItem("totalBasket", intBasket);


                    window.location.href = "confirmation.html";

                });


            });
        });
    });
})();