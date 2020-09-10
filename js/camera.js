const productPrice = document.querySelector('.price'),
    selectChange = document.querySelector('select'),
    titleOnglet = document.querySelector('title'),
    productTitle = document.querySelector(".productTitle"),
    productCategory = document.getElementById("category"),
    productModel = document.getElementById('model'),
    productObjectif = document.getElementById("objectif"),
    productDiaphragme = document.getElementById('diaphragme'),
    productType = document.getElementById('type'),
    productVitesse = document.getElementById('vitesse'),
    productImage = document.querySelector('.imageProduct'),
    addToCart = document.getElementById('addToCart'),
    mainContainer = document.querySelector('.product-container');

let bigAnglePrice = 80,
    tvObjectifPrice = 40,
    fisheyePrice = 22,
    macroPrice = 35,
    portraitPrice = 50;



/* Create class of Product */
class Product {
    constructor(name, price, category, model, objectif, diaphragme, type, vitesse, imageUrl) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.model = model;
        this.objectif = objectif;
        this.diaphragme = diaphragme;
        this.type = type;
        this.vitesse = vitesse;
        this.imageUrl = imageUrl;
    }

    /* Calculate the price */
    updatePrice() {

        switch (selectChange.value) {
            case "Grand-angle":
                productPrice.innerHTML = bigAnglePrice + this.price;
                break;
            case "Télé-objectif":
                productPrice.innerHTML = tvObjectifPrice + this.price;
                break;
            case "Fisheye":
                productPrice.innerHTML = this.price + fisheyePrice;
                break;
            case "Macro":
                productPrice.innerHTML = this.price + macroPrice;
                break;
            case "Portrait":
                productPrice.innerHTML = this.price + portraitPrice;
                break;
            default:
                productPrice.innerHTML = this.price;
                break;
        }

    }

    /* Create new product */
    createProduct() {
        titleOnglet.innerHTML = this.name + " - Orinoco";
        productTitle.innerHTML = this.name;
        productPrice.innerHTML = this.price;
        productCategory.innerHTML = this.category;
        productModel.innerHTML = this.model;
        productObjectif.innerHTML = this.objectif;
        productDiaphragme.innerHTML = this.diaphragme;
        productType.innerHTML = this.type;
        productVitesse.innerHTML = this.vitesse;
        productImage.setAttribute("src", this.imageUrl);
    }

    /* To add in the cart */
    addCartProduct() {
        let totalPrice = 0;

        // Take the right value to send in the cart
        switch (selectChange.value) {
            case "Grand-angle":
                totalPrice = bigAnglePrice + this.price;
                break;
            case "Télé-objectif":
                totalPrice = tvObjectifPrice + this.price;
                break;
            case "Fisheye":
                totalPrice = this.price + fisheyePrice;
                break;
            case "Macro":
                totalPrice = this.price + macroPrice;
                break;
            case "Portrait":
                totalPrice = this.price + portraitPrice;
                break;
            default:
                totalPrice = this.price;
                break;
        }

        localStorage.setItem("name", `${this.name}`);
        localStorage.setItem("imageUrl", `${this.imageUrl}`);
        localStorage.setItem("price", `${totalPrice}`);

        let nameStored = localStorage.getItem('name');
        let priceStored = localStorage.getItem('price');
        let imageStored = localStorage.getItem('imageUrl');

            productSidebar.innerHTML += `
                <img id="imageProduct--icon" src="${imageStored}"  alt="Miniature d'un appareil photo" class="col-4">
                <div class="col-7">
                    <h3 class="h6">${nameStored} / ${selectChange.value}</h3>
                    <p>Prix: <span class="price">${priceStored}</span>€</p>
                </div>
                `;

        totalSidebar.innerHTML = priceStored;
    }

}


/* All instance of Product */
const contessaInfo = new Product('Contessa S 310', 259, 'Prise de vue / Appareil / Boîtier télémètre', 'Contessa S 310 (Type 10.0351)', '"Tessar" 1:2.8/40mm', 'Iris - f:2,8 / 40mm', '500 S Prontor électronique. priorité à l\'ouverture', '8-500em', '../images/vcam_1.jpg');
const continaInfo = new Product('Contina IIa', 209, 'Prise de vue / Appareil / Boîtier reflex 126', 'Contina IIa - type 527/24', '"Novar" 1:3,5/45mm', 'Iris ( 3,5 à 22)', 'Central Prontor SVS - 1s-300e + B & retard', 'NA', '../images/vcam_2.jpg');
const ikontaInfo = new Product('Super Ikonta II', 120, 'Prise de vue / Appareil / Pliant', 'Super Ikonta II B [532/16]', '"Tessar" 1:2,8 / 8cm', 'Iris ( 2,8 à 22)', 'Compur Rapid', '- 1s / 400e +B à armement préalable', '../images/vcam_3.jpg');
const c35Info = new Product('C 35 LABO', 75, 'Prise de vue / Appareil / Boîtier 35mm', 'C 35', 'NA', 'NA', 'NA', '1s - 125sec', '../images/vcam_5.jpg');
const contaflexInfo = new Product('Contaflex Super', 99, 'Prise de vue / Appareil / Boîtier reflex 35mm', 'Contaflex Super - type 10.127', '"Tessar" - 1:2,8 /50mm', 'Iris ( 2,8 à 22)', 'NA', '1s - 500e', '../images/vcam_4.jpg');
