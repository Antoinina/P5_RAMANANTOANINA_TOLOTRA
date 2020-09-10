const url = "http://localhost:3000/api/cameras";
const urlParamsProduct = new URLSearchParams(window.location.search);

/* Access to the data on the api */
async function importData() {
    let response = await fetch(url);
    if (response.ok) {
        let allProduct = await response.json();
        selectProduct(allProduct);
    } else {
        page404(mainContainer);
        console.error;
    }
}


importData();


/* Create page for each product*/
function selectProduct(jsonRequest) {
    if (urlParamsProduct != "") {
        if (urlParamsProduct.has(`${jsonRequest[0]._id}`)) {

            /* Change pricing*/
            selectChange.addEventListener('change', (event) => {
                contessaInfo.updatePrice();
            });

            /* Create Contessa page product*/
            contessaInfo.createProduct();

        } else if (urlParamsProduct.has(`${jsonRequest[1]._id}`)) {

            /* Change pricing*/
            selectChange.addEventListener('change', (event) => {
                continaInfo.updatePrice();
            });

            /* Create Contina page product*/
            continaInfo.createProduct();

        } else if (urlParamsProduct.has(`${jsonRequest[2]._id}`)) {

            /* Change pricing*/
            selectChange.addEventListener('change', (event) => {
                ikontaInfo.updatePrice();
            });

            /* Create Ikonta page product*/
            ikontaInfo.createProduct();

        } else if (urlParamsProduct.has(`${jsonRequest[4]._id}`)) {

            /* Change pricing*/
            selectChange.addEventListener('change', (event) => {
                c35Info.updatePrice();
            });

            /* Create C35 page product*/
            c35Info.createProduct();

        } else if (urlParamsProduct.has(`${jsonRequest[3]._id}`)) {

            /* Change pricing*/
            selectChange.addEventListener('change', (event) => {
                contaflexInfo.updatePrice();
            });

            /* Create Contaflex page product*/
            contaflexInfo.createProduct();

        } else {
            page404(mainContainer);
        }
    }
}






