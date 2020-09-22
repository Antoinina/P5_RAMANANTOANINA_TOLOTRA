const url = "http://localhost:3000/api/cameras", // API's url
    urlParamsProduct = new URLSearchParams(window.location.search), // Url searching id
    productInfo = urlParamsProduct.get("product");

const productPrice = document.querySelector('.price'),
    titleOnglet = document.querySelector('title'),
    productTitle = document.querySelector('.productTitle'),
    productImg = document.querySelector('.imageProduct'),
    productDescription = document.getElementById('descriptionBloc'),
    productPageContainer = document.querySelector('.productpage-container'),
    productContainer = document.querySelector('.product-container'),
    totalPrice = document.getElementById('totalPrice');

async function importDataAPI() {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json(); // Pick all items in API
    } else {
        page404(productContainer);
        console.error;
    }
}

// Create a new class
class Camera {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

}

const contessaInfo = new Camera('Contessa S 310', 259, '1972, année fatidique pour ZEISS IKON qui jette l\'éponge, mais juste avant de cesser toute activité, elle met sur le marché un appareil censé concurrencer les Rollei 35. Deux modèles étaient proposés, le "Contessa S310" apparu un 2 ans plus tôt.'),
    continaInfo = new Camera('Contina IIa', 209, 'Manufactured from 1956 to 1958, this well-made 35mm viewfinder camera was fitted with either Novicar Anastigmat or Novar Anastigmat lenses in a Prontor SVS shutter. The camera has an uncoupled exposure meter.'),
    ikontaInfo = new Camera('Super Ikonta II', 120, 'The 531/2 is a folding camera in the Ikonta line, produced by the German company Zeiss Ikon. It takes 8 images size 6x9 cm on 120 type rollfilm. With an inlay mask it is possible to take 16 images size 4.5x6 cm on same rollfilm. The Super Ikonta\'s are equiped with coupled rangefinders.'),
    c35Info = new Camera('C 35 LABO', 75, ' Pour photographie microscopique - Sur la base d\'un VOIGTLÄNDER Vitoret - Pas de viseur (comme le LEICA MDa) & pas d\'obturateur sur le boîtier - le bouton sur le dessus du capot, sert uniquement, à débloquer le passage à la vue suivante - obturateur externe : 1s - 125sec.'),
    contaflexInfo = new Camera('Contaflex Super', 99, ' Le miroir et mis en position au cours de l\'armement et de l\'avancement du film - la visée n\'est plus possible après une prise de vue - Dos entiérement amovible fermé par deux vérous');

//Make an array to put all new products
let itemsArray = [];
itemsArray.push(contessaInfo, continaInfo, ikontaInfo, c35Info, contaflexInfo);

importDataAPI().then(function (responseRequest) {

    //Customize informations from API
    for (let i = 0; i < itemsArray.length; i++) {
        responseRequest[i] = {
            'name': itemsArray[i].name,
            'price': itemsArray[i].price,
            'description': itemsArray[i].description,
            'imageUrl': responseRequest[i].imageUrl,
            '_id': responseRequest[i]._id,
            'lenses': responseRequest[i].lenses,
        };
    }

    if (productInfo == null) {
        productContainer.innerHTML += `
            <div class="row no-gutters justify-content-center align-items-center first-line-product">
                <a class="col-md-6 view overlay" href="pages/product.html?product=${responseRequest[0]._id}">
                    <img class="col-md-12" src="${responseRequest[0].imageUrl}" alt="Image d'un appareil photo">
                    <div class="mask flex-center flex-column">
                        <p class="text-warning h1 test">${responseRequest[0].name}</p>
                        <p class="text-warning">${responseRequest[0].price}€</p>
                    </div>
                </a>
                <a class="col-md-6 view overlay" href="pages/product.html?product=${responseRequest[1]._id}">
                    <img class="col-md-12" src="${responseRequest[1].imageUrl}">
                    <div class="mask flex-center flex-column">
                        <p class="text-warning h1">${responseRequest[1].name}</p>
                        <p class="text-warning">${responseRequest[1].price}€</p>
                    </div>
                </a>
            </div>
            <div class="row no-gutters justify-content-center second-line-product">
                <a class="col-md-4 view overlay" href="pages/product.html?product=${responseRequest[2]._id}">
                    <img class="col-md-12" src="${responseRequest[2].imageUrl}"  alt="Image d'un appareil photo">
                    <div class="mask flex-center flex-column">
                        <p class="text-warning h2">${responseRequest[2].name}</p>
                        <p class="text-warning">${responseRequest[2].price}€</p>
                    </div>
                </a>
                <a class="col-md-4 align-self-center view overlay" href="pages/product.html?product=${responseRequest[4]._id}">
                    <img class="col-md-12" src="${responseRequest[4].imageUrl}"  alt="Image d'un appareil photo">
                    <div class="mask flex-center flex-column">
                        <p class="text-warning h2">${responseRequest[4].name}</p>
                        <p class="text-warning">${responseRequest[4].price}€</p>
                    </div>
                </a>
                <a class="col-md-4 view overlay" href="pages/product.html?product=${responseRequest[3]._id}">
                    <img class="col-md-12" src="${responseRequest[3].imageUrl}"  alt="Image d'un appareil photo">
                    <div class="mask flex-center flex-column">
                        <p class="text-warning h2">${responseRequest[3].name}</p>
                        <p class="text-warning">${responseRequest[3].price}€</p>
                    </div>
                </a>
            </div>
    `;
    } else {
        // Show dynamically items selected 
        for (let i = 0; i < itemsArray.length; i++) {
            if (productInfo === `${responseRequest[i]._id}`) {
                titleOnglet.innerHTML += `${responseRequest[i].name}` + "- Orinoco";
                document.querySelector('.product-template').innerHTML = `
                <img class="col-md-5 imageProduct" src="${responseRequest[i].imageUrl}" alt="Image d'un appareil photo">
                <div class="col-md-4 row no-gutters flex-column justify-content-center">
                    <div>
                        <h3 class="productTitle">${responseRequest[i].name}</h3>
                        <p>Prix: <span class="price">${responseRequest[i].price}</span>€</p>
                    </div>
                    <select name="lentilles" class="custom-select">
                        <option value="Grand-angle">Grand-angle</option>
                        <option value="Standard" selected>Standard</option>
                        <option value="Télé-objectif">Télé-objectif</option>
                        <option value="Fisheye">Fisheye</option>
                        <option value="Macro">Macro</option>
                        <option value="Portrait">Portrait</option>
                    </select>
                    <a id="addToCart" class="btn btn-outline-warning" href="cart.html">Ajouter au panier</a>
                    <p>
                        Description : <span id="descriptionBloc">${responseRequest[i].description}</span>
                    </p>
                </div>
                `;
            }
        }

        const cartButton = document.getElementById("addToCart"),
            selectLens = document.querySelector("select");


        if (productInfo === responseRequest[0]._id) {
            cartButton.addEventListener("click", () => {
                localStorage.setItem("nameProduct", responseRequest[0].name);
                localStorage.setItem("imageProduct", responseRequest[0].imageUrl);
                localStorage.setItem("priceProduct", responseRequest[0].price);
                localStorage.setItem("lens", selectLens.value);
            });
        } else if (productInfo === responseRequest[1]._id) {
            cartButton.addEventListener("click", () => {
                localStorage.setItem("nameProduct", responseRequest[1].name);
                localStorage.setItem("imageProduct", responseRequest[1].imageUrl);
                localStorage.setItem("priceProduct", responseRequest[1].price);
                localStorage.setItem("lens", selectLens.value);
            });
        } else if (productInfo === responseRequest[2]._id) {
            cartButton.addEventListener("click", () => {
                localStorage.setItem("nameProduct", responseRequest[2].name);
                localStorage.setItem("imageProduct", responseRequest[2].imageUrl);
                localStorage.setItem("priceProduct", responseRequest[2].price);
                localStorage.setItem("lens", selectLens.value);
            });
        } else if (productInfo === responseRequest[3]._id) {
            cartButton.addEventListener("click", () => {
                localStorage.setItem("nameProduct", responseRequest[3].name);
                localStorage.setItem("imageProduct", responseRequest[3].imageUrl);
                localStorage.setItem("priceProduct", responseRequest[3].price);
                localStorage.setItem("lens", selectLens.value);
            });
        } else if (productInfo === responseRequest[4]._id) {
            cartButton.addEventListener("click", () => {
                localStorage.setItem("nameProduct", responseRequest[4].name);
                localStorage.setItem("imageProduct", responseRequest[4].imageUrl);
                localStorage.setItem("priceProduct", responseRequest[4].price);
                localStorage.setItem("lens", selectLens.value);
            });
        }
    }

});
