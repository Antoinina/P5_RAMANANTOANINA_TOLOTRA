const urlParams = new URLSearchParams(window.location.search),
    categoryInfo = urlParams.get('category'),
    productContainer = document.querySelector('.product-container'),
    productPage = document.querySelector('#page-product');



/*Animation initialization*/
$(document).ready(function () {
    new WOW().init();
});


function navPage() {
    if (categoryInfo !== null) {
        if (categoryInfo == 'camera') {
            $('#home').hide();
            $('#particles-js').hide();
            document.getElementById('home-container').classList.remove('bg-dark');
            document.getElementById('home-container').classList.add('bg-white'); // Change background color of page product
            $('#page-product').show();
        } else {
            $('#home').hide();
            $('#particles-js').hide();
            document.getElementById('home-container').classList.remove('bg-dark');
            document.getElementById('home-container').classList.add('bg-white'); // Change background color of page product
            $('#page-product').show();
            page404(productPage);
            $('.product-container').hide();
        }
    }


}


const url = "http://localhost:3000/api/cameras";

/* Access to the data on the api */
async function importData() {
    let response = await fetch(url);
    if (response.ok) {
        let allProduct = await response.json();
        navPage();
        updateProduct(allProduct);
        showProductImg(allProduct);
    } else {
        page404(productPage);
        console.error;
    }
}

function updateProduct(jsonRequest1) {
    /* Update the product's name */
    jsonRequest1[0].name = `${contessaInfo.name}`;
    jsonRequest1[1].name = `${continaInfo.name}`;
    jsonRequest1[2].name = `${ikontaInfo.name}`;
    jsonRequest1[3].name = `${contaflexInfo.name}`;
    jsonRequest1[4].name = `${c35Info.name}`;

    /* Update the product price */
    jsonRequest1[0].price = `${contessaInfo.price}`;
    jsonRequest1[1].price = `${continaInfo.price}`;
    jsonRequest1[2].price = `${ikontaInfo.price}`;
    jsonRequest1[3].price = `${contaflexInfo.price}`;
    jsonRequest1[4].price = `${c35Info.price}`;
}


/* To show product details */
function showProductImg(jsonRequest) {
    productContainer.innerHTML += `
    <div class="row no-gutters justify-content-center align-items-center first-line-product">
    <a class="col-md-6 view overlay" href="pages/product.html?${jsonRequest[0]._id}">
        <img class="col-md-12" src="${jsonRequest[0].imageUrl}" alt="Image d'un appareil photo">
        <div class="mask flex-center flex-column">
            <p class="text-warning h1 test">${jsonRequest[0].name}</p>
            <p class="text-warning">${jsonRequest[0].price}€</p>
        </div>
    </a>
    <a class="col-md-6 view overlay" href="pages/product.html?${jsonRequest[1]._id}">
        <img class="col-md-12" src="${jsonRequest[1].imageUrl}">
        <div class="mask flex-center flex-column">
            <p class="text-warning h1">${jsonRequest[1].name}</p>
            <p class="text-warning">${jsonRequest[1].price}€</p>
        </div>
    </a>
</div>
<div class="row no-gutters justify-content-center second-line-product">
    <a class="col-md-4 view overlay" href="pages/product.html?${jsonRequest[2]._id}">
        <img class="col-md-12" src="${jsonRequest[2].imageUrl}"  alt="Image d'un appareil photo">
        <div class="mask flex-center flex-column">
            <p class="text-warning h2">${jsonRequest[2].name}</p>
            <p class="text-warning">${jsonRequest[2].price}€</p>
        </div>
    </a>
    <a class="col-md-4 align-self-center view overlay" href="pages/product.html?${jsonRequest[4]._id}">
        <img class="col-md-12" src="${jsonRequest[4].imageUrl}"  alt="Image d'un appareil photo">
        <div class="mask flex-center flex-column">
            <p class="text-warning h2">${jsonRequest[4].name}</p>
            <p class="text-warning">${jsonRequest[4].price}€</p>
        </div>
    </a>
    <a class="col-md-4 view overlay" href="pages/product.html?${jsonRequest[3]._id}">
        <img class="col-md-12" src="${jsonRequest[3].imageUrl}"  alt="Image d'un appareil photo">
        <div class="mask flex-center flex-column">
            <p class="text-warning h2">${jsonRequest[3].name}</p>
            <p class="text-warning">${jsonRequest[3].price}€</p>
        </div>
    </a>
</div>
    `;
}

importData();