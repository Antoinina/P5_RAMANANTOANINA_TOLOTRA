const main = document.querySelector(".confirmation-template");

if(localStorage.getItem("formData") && localStorage.getItem("totalBasket")){
    const orderData = JSON.parse(localStorage.getItem("formData"));
    const firstName = Object.values(orderData.firstName).join("");
    const price = localStorage.getItem("totalBasket");

    main.innerHTML += `
  
    <h1 class="text-white">Merci ${firstName} pour votre commande !</h1>
    <p class="text-white">Votre commande n° d'un total de ${price}€ a bien été validée, vous allez bientôt recevoir un mail de
        confirmation avec le lien de suivi de votre colis.</p>
 
    
    `;
} else{
    main.removeChild();
    main.innerHTML = `
       <p class="text-white">Aucune commande n'a été passée ou une erreur est survenue</p>
    `;
}