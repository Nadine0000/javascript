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

function updateTotalPrice() {
    let currentUserName = JSON.parse(localStorage.getItem('currentuser'));
    
    let userCart = JSON.parse(localStorage.getItem(`${JSON.parse(localStorage.getItem('currentuser')).name}'s cart`)) || [];
    let tb= 0;

    userCart.forEach(dress => {
        tb+= parseFloat(dress.price);
        var totalprice = document.getElementById('totalprice');
        totalprice.innerText = 'Total Price: $' + tb
    });}


    window.document.addEventListener('DOMContentLoaded', function () {
    let currentUserName = JSON.parse(localStorage.getItem('currentuser'));
    let userCart = JSON.parse(localStorage.getItem(`${JSON.parse(localStorage.getItem('currentuser')).name}'s cart`)) || [];
    let productGallery = document.getElementById('buytable');
      console.log(userCart)



      userCart.forEach(dress => {

        var productRow = document.createElement('tr');
        var productTd = document.createElement('td');
        var productImage = document.createElement('img');

        productImage.setAttribute('src', dress.image);

        var productDescription = document.createElement('p');
        productDescription.innerText = dress.name + '\n' + dress.description;

        // Create a price element
        var productPrice = document.createElement('p');
        productPrice.innerText = 'Price: $' + dress.price;

     
        
   
       

        //create p for the available size
        var productSize= document.createElement('p');
        productSize.innerText = 'Your Chosen Size:' +''+ dress.selectedSize;

        var buyproduct=document.createElement('button')
        buyproduct.innerText='Buy Now'

        var deleteimg=document.createElement('img');
        deleteimg.classList.add('deleteimg');
        deleteimg.setAttribute('src','../images/deleteimg.png')
        deleteimg.classList.add('deleteimg')
        
        

        productTd.appendChild(productImage);
        productTd.appendChild(productDescription);
        productTd.appendChild(productPrice);
        productTd.appendChild(productSize);
        productTd.appendChild(deleteimg);
        productTd.appendChild(buyproduct);

        
       

        productRow.appendChild(productTd);
        productGallery.appendChild(productRow);


        deleteimg.addEventListener('click', function () {
        
    
             {
                
        
               
                var index = userCart.indexOf(dress);
              
        
                
                if (index != -1) {
                    
                   userCart.splice(index, 1);
                }
        
                
                productRow.remove();
                
                // Save the updated array to localStorage after removing the product.
                localStorage.setItem(`${JSON.parse(localStorage.getItem('currentuser')).name}'s cart`, JSON.stringify(userCart));
                updateTotalPrice();
                location.reload();
            }


           
        });


        buyproduct.addEventListener('click',(e)=>{
            if (JSON.parse(localStorage.getItem('i')) == null || JSON.parse(localStorage.getItem('i')) == 0) {
                this.location.assign('register.html');
            }
            else{
                this.location.assign('buy.html');
            }
            
            e.preventDefault();
            console.log('clicked');
           
          })

        }); // end of foreach
    let bag=document.getElementById('bag');
    bag.addEventListener('click',function(){
       window.location.href='shoppingcart.html';
         })


     
         
     



   
    
         updateTotalPrice();



}); // end of load