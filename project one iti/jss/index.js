window.addEventListener('load', function(){
   /* let products = JSON.parse(localStorage.getItem('currentproducts')) || [];
    let array = [];

    if (localStorage.getItem('newproducts') != null) {
        array = JSON.parse(localStorage.getItem("newproducts")) || [];
    } else {
        array = products;
        localStorage.setItem("currentproducts", JSON.stringify(array));
    }

    let productGallery = document.getElementById('productGallery');

    array.forEach(function(product) {
        // Create a div for each product
        var productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Create an image element
        var productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.classList.add("image-c");

        // Append the image to the productDiv
        productDiv.appendChild(productImage);

        // Append the productDiv directly to the existing productGallery
        productGallery.appendChild(productDiv);
    });
});*/



btn=this.document.getElementById('shopnow')
btn.addEventListener('click',function(){
    location.assign('gallery.html');
})
})
