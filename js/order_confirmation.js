const main = document.querySelector(".confirmation-template");

// All informations from localStorage
if (localStorage.getItem("formData") && localStorage.getItem("totalBasket")) {
    const formData = JSON.parse(localStorage.getItem("formData")),
        orderId = localStorage.getItem("orderData"),
        firstName = Object.values(formData.firstName).join(""),
        price = localStorage.getItem("totalBasket");

    main.innerHTML += `
    <h1 class="text-white">Merci ${firstName} pour votre commande !</h1>
    <p class="text-white">Votre commande n°${orderId} d'un total de ${price}€ a bien été validée, vous allez bientôt recevoir un mail de confirmation avec le lien de suivi de votre colis.</p>
    `;
} else {
    main.removeChild();
    main.innerHTML = `
       <p class="text-white">Aucune commande n'a été passée ou une erreur est survenue</p>
    `;
}

window.addEventListener("beforeunload", () => localStorage.clear()); // Clear the localStorage when the user close the window --> after confirmation page