/*Animation initialization*/
$(document).ready(function () {
    new WOW().init();
});

const urlParams = new URLSearchParams(window.location.search),
    categoryInfo = urlParams.get('category'),
    productPage = document.querySelector('#page-product');


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
