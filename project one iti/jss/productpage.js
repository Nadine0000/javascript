window.onload = function () {
  let dynamicLink = document.getElementById("dynamicLink");

  if (JSON.parse(localStorage.getItem('i')) == null || JSON.parse(localStorage.getItem('i')) == 0) {
      dynamicLink.innerText = 'Sign in';
  } else if (JSON.parse(localStorage.getItem('i')) == 1) {
      dynamicLink.innerText = 'Sign out';
  }
  
  dynamicLink.addEventListener('click', function () {
    
      if (dynamicLink.innerText == 'Sign in') {
          location.assign('Login Page.html');
          localStorage.setItem('i', 0);
      } else if (dynamicLink.innerText === 'Sign out') {
          

          let currentUserName = JSON.parse(localStorage.getItem('currentuser'));

          // Retrieve the user's cart
         

          location.assign('Login Page.html');
          localStorage.setItem('i', 0);

           // Remove the user's cart
         
           // Remove 'currentuser'
           localStorage.removeItem('currentuser');
          
      }
  });
}



document.addEventListener('DOMContentLoaded', function () {
   
    let productDetails = JSON.parse(localStorage.getItem('details')) || [];
    let productTable = document.getElementById('productTable');
 
   
    productDetails.forEach(function (product) {
        // Create a table row (tr)
        var productRow = document.createElement('tr');
 
        // Create a single td for the product
        var productimage = document.createElement('td');
        var productTd = document.createElement('td');
 
        // Create an image element
        var productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.classList.add('gallery-img');
 
        // Create a description element
        var productDescription = document.createElement('p');
        productDescription.innerText = product.name + '\n' + product.description;
 
        // Create a price element
        var productPrice = document.createElement('p');
        productPrice.innerText = 'Price: $' + product.price;
          // create p for the material and the available see more details of the product------------
          var productinfo= document.createElement('p');
          productinfo.innerText = 'Brief:'  +''+  product.info;

          //create p for the available size
          var productSize= document.createElement('p');
          productSize.innerText = 'Available Sizes:' +''+ product.size;
          var sizesArray = product.size.split(',');
          var selectElement = document.createElement("select");
            selectElement.id='select'

           
          for (var i = 0; i < sizesArray.length; i++) {
           
            var option = document.createElement("option");
        
          
            option.value = sizesArray[i];
            option.text = sizesArray[i];
        
          
            selectElement.appendChild(option);
        }
        selectElement.selectedIndex = -1;







 
        //create add to Shopping Bag --------------------
        var addtocartbutton= document.createElement('button');
        addtocartbutton.innerHTML = 'Add To Cart'; 
       
        addtocartbutton.classList.add('shoppingbutton');
 
 
        // Append the image, description, and price to the td
        productimage.appendChild(productImage);
        productTd.appendChild(productinfo);
        productTd.appendChild(productDescription);
        productTd.appendChild(productPrice);
        
        
        productTd.appendChild(productSize);
        productTd.appendChild(selectElement)
        productTd.appendChild(addtocartbutton);
        
 
        // Append the td to the row
        productRow.appendChild(productimage);
        productRow.appendChild(productTd);

      
 
        // Append the row to the table
        productTable.appendChild(productRow);
     
        addtocartbutton.addEventListener('click',function(){

            addtocart(product)
            
 
 
       })
 
 
})


let bag=document.getElementById('bag');
bag.addEventListener('click',function(){
   window.location.href='shoppingcart.html';
})//bag event


function addtocart(product){
      
   if(JSON.parse(localStorage.getItem('i')) == null || JSON.parse(localStorage.getItem('i')) == 0){
    location.assign('register.html')
   }
   else{
      let sel=document.getElementById('select')
      if(sel.value){

   // i will take copy of product object to add the selected size in the array and display it in the cart pageeee----
        let selectedProduct = {
            ...product,
            selectedSize: sel.value
        };
    let currentUserName = JSON.parse(localStorage.getItem('currentuser'));
  
    let userCart = JSON.parse(localStorage.getItem(`${currentUserName.name}'s cart`)) || [];
    
    userCart.push(selectedProduct);
    localStorage.setItem(`${currentUserName.name}'s cart`, JSON.stringify(userCart));
   // let cart =  JSON.parse(localStorage.getItem('currentuser')) || [];
   //cart.push(product);
  // localStorage.setItem('cart', JSON.stringify(cart));
   
   let confirmation = window.confirm('PRODUCT ADDED TO YOUR SHOPPING BAG!,Go To Shopping Bag?');
   if(confirmation){
    location.assign('shoppingcart.html');
   }
   else{
    location.assign('gallery.html');
   }
}else{
    alert('You Must Choose a Size First!')
}
}


}

})

