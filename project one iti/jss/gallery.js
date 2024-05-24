window.onload = function () {
    let dynamicLink = document.getElementById("dynamicLink");

    if (JSON.parse(localStorage.getItem('i')) == null || JSON.parse(localStorage.getItem('i')) == 0) {
        dynamicLink.innerText = 'Sign in';
    } else if (JSON.parse(localStorage.getItem('i')) == 1) {
        dynamicLink.innerText = 'Sign out';
    }

    dynamicLink.addEventListener('click', function () {
        if (dynamicLink.innerText == 'Sign in') {

            let currentUserName = JSON.parse(localStorage.getItem('currentuser'));

            // Retrieve the user's cart
          

            location.assign('Login Page.html');
            localStorage.setItem('i', 0);
        } else if (dynamicLink.innerText === 'Sign out') {
           
           
            location.assign('Login Page.html');
            localStorage.setItem('i', 0);
           
              // Remove the user's cart
             
              // Remove 'currentuser'
              localStorage.removeItem('currentuser');
        }
    });
}
















document.addEventListener('DOMContentLoaded', function () {
   let productGallery = document.getElementById('productGallery'); //parent of gallery kolo
   
   let products = [
       { id: 1, name: 'White Dress', description: 'classic  dress', price: 40, image: '../images/fashion6.jpg',size:'S,L',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 2, name: 'White Dress', description: 'basic dress ', price: 90, image: '../images/red (2).jpg',size:'S,XL ',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 3, name: 'Green Dress', description: 'Wrap dress', price: 90, image: '../images/hh.jpg',size:'L,M',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 4, name: 'Beige Dress', description: 'sheath dress', price: 70, image: '../images/g.jpg',size:' M,L,S',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 5, name: 'Pink Dress', description: 'bodycon dress', price: 10, image: '../images/b.jpg',size:'L,M ',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 6, name: 'Blue Dress', description: 'Ball gown dress', price: 500, image: '../images/Dresses.jpg',size:'XL,S ,M',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },    
       { id: 7, name: 'White Dress', description: 'classic  dress', price: 40, image: '../images/Akko.jpg',size:'S,L',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 8, name: 'White Dress', description: 'basic dress ', price: 90, image: '../images/bbbb.jpg',size:'S,XL ',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       { id: 9, name: 'Green Dress', description: 'Wrap dress', price: 90, image: '../images/back.jpg',size:'L,M',info: 'Step into a world of timeless glamour with our Elegant Dress Collection. Each piece is a masterpiece of sophistication, designed to capture the essence of refined femininity. Our elegant dresses feature meticulous craftsmanship, luxurious fabrics, and attention to detail that ensures you make a statement at every occasion.' },
       // Add more product data as needed

   ];   
   
  
  
   //var existingproducts = JSON.parse(localStorage.getItem('currentproducts'));
     // Save the existingproducts array to local storage
      
  
       //to remove what i added in the dashboard-----------------------------------
   

   // Iterate through each product and create HTML elements

   let array=[];
   if(localStorage.getItem('newproducts')!=null){
      array=JSON.parse(localStorage.getItem("newproducts"))||[];
   }
   else{
      array=products;
      localStorage.setItem("currentproducts",JSON.stringify(array));

   }


     
      array.forEach(function (product) {
       // Create a table row (tr)
       var productRow = document.createElement('tr');

       // Create a single td for the product
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
         // create link see more details of the product------------
         


       //create add to Shopping Bag --------------------
       var addtocartbutton= document.createElement('button');
       addtocartbutton.innerHTML = 'View '; 
      
       addtocartbutton.classList.add('shoppingbutton');


       // Append the image, description, and price to the td
       productTd.appendChild(productImage);
       productTd.appendChild(productDescription);
       productTd.appendChild(productPrice);
       productTd.appendChild(addtocartbutton);
     

       // Append the td to the row
       productRow.appendChild(productTd);

       // Append the row to the table
       productGallery.appendChild(productRow);
     
       addtocartbutton.addEventListener('click',function(){

           view(product)
           


      })

      

     
       






      
 



















       // Add an event listener to the image
        
   });
  

   function view(product) {
      
      let details = [product];
  
   
      localStorage.setItem('details', JSON.stringify(details));
  
      
      window.location.href = 'productpage.html';
  }
      // Check if the product has specific details
      /*if (product.id === 1) {
          // Add specific details for the product with id 1
          product.details = {
              material: 'Cotton',
              sizes: ['XS', 'S', 'M', 'L'],
              // Add any other details you need
          };
      }  if (product.id === 2) {
          // Add specific details for the product with id 2
          product.details = {
              material: 'Polyester',
              sizes: ['S'],
              // Add any other details you need
          };
      } if (product.id === 3) {
          // Add specific details for the product with id 3
          product.details = {
              material: 'Silk',
              sizes: ['M', ],
              // Add any other details you need
          };
      } if (product.id === 4) {
          // Add specific details for the product with id 4
          product.details = {
              material: 'Leather',
              sizes: ['S', 'M'],
              // Add any other details you need
          };
      }  if (product.id === 5) {
          // Add specific details for the product with id 5
          product.details = {
              material: 'Denim',
              sizes: ['XS'],
              // Add any other details you need
          };
      } if (product.id === 6) {
          // Add specific details for the product with id 6
          product.details = {
              material: 'Velvet',
              sizes: ['M', 'L'],
              // Add any other details you need
          };
      }
      // Repeat the same pattern for other products
      
      // Add the modified product to the details array
      details.push(product);
   
      // Store the updated details array in local storage
      localStorage.setItem('details', JSON.stringify(details));
   
     */
       

   /*let cart = JSON.parse(localStorage.getItem('cart')) || [];
   cart.push(product);
   localStorage.setItem('cart', JSON.stringify(cart));
   
   alert('Product added to cart!');*/

  /*}*/
        

        
   let bag=document.getElementById('bag');
   bag.addEventListener('click',function(){
      window.location.href='shoppingcart.html';
   })

     
/*function details(product){

   arrayofdetails=JSON.parse(localStorage.getItem('cart')) || [];
   arrayofdetails.push(product);
   localStorage.setItem('details',json.stringify(arrayofdetails))
   if(product.name=)

}*/




   

});