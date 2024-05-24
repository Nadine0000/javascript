


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


window.addEventListener('load',function(){

productname=this.document.getElementById('productName')
productname.addEventListener('blur',function(){

if(! validateproductname()){
    this.className='incorrect';
    this.focus();
    this.select();
    
}
else{
    this.className='correct';
}
})//end of blur productname---------------------

let productdesc= this.document.getElementById('productDescription');
productdesc.addEventListener('blur',function(){

    if(!productdescription()){
        this.className='incorrect';
    this.focus();
    this.select();
    
}
else{
    this.className='correct';
}
        
})//end of validate productdescription ---------


productpri=this.document.getElementById('productPrice');
productpri.addEventListener('blur',function(){

    if(!validateprice()){
        this.className='incorrect';
    this.focus();
    this.select();
    
}
else{
    this.className='correct';
}


})//end of validate the price--------------

/*productimg=this.document.getElementById('productImage');
productimg.addEventListener('blur',function(){

    if(!validateimage()){
        this.className='incorrect';
    this.focus();
    this.select();
    
}
else{
    this.className='correct';
}


})*/


let products=JSON.parse(localStorage.getItem('currentproducts'))||[];
 



      const addProductBtn = document.getElementById('addProductBtn');

    this.document.forms[0].addEventListener('submit',function(e){
         // if(!(validateproductname()&&productdescription()&&validateprice()))
        //  {e.preventDefault();
        //    alert("please complete your data")
       // }
    
     //else{
        

    
    let productName = document.getElementById('productName').value;  
    let productDesc = document.getElementById('productDescription').value;  
    let productPrice = document.getElementById('productPrice').value;  
    let productImage = document.getElementById('productImage').value;  
    let productID= document.getElementById('id').value;
    let productSize=document.getElementById('productsize').value;
    let productinfo=document.getElementById('productinfo').value;

    


    let newProduct = {
         id:productID,
        name: productName,
        description: productDesc,
        price: productPrice,
        image: productImage,
        size:productSize,
        info:productinfo
       
    };

    array.push(newProduct);


    // Save to local storage
    localStorage.setItem('newproducts', JSON.stringify(array));

    //alert("Your data has been saved to local storage ");  


    //}

    })



      let array=[];
    if(localStorage.getItem('newproducts')!=null){
        array=JSON.parse(localStorage.getItem("newproducts"))||[];
     }
     else{
        array=products;
        

     }


     //let products = JSON.parse(localStorage.getItem('newproducts')) || [];
     
     array.forEach(function (product) {
    // Create a table row (tr)
    var productRow = document.createElement('tr');
    productRow.classList.add('gallery-row');

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
    //create checkbox
     var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox") ;
      //create deleteimg
      var deleteimg=document.createElement('img');
      deleteimg.classList.add('deleteimg');
      deleteimg.setAttribute('src','../images/deleteimg.png')
         
          

    // Append the image, description, and price to the td
    productTd.appendChild(productImage);
    productTd.appendChild(productDescription);
    productTd.appendChild(productPrice);
    productTd.appendChild(checkbox );
    productTd.appendChild(deleteimg);

    // Append the td to the row
    productRow.appendChild(productTd);

    // Append the row to the table
    productGallery.appendChild(productRow);


// to allow admin remove product-----------------------------------------
    deleteimg.addEventListener('click', function () {
        
    
        if (checkbox.checked) {
            
    
           
            var index = array.indexOf(product);
          
    
            
            if (index != -1) {
                
                array.splice(index, 1);
            }
    
            
            productRow.remove();
    
            // Save the updated array to localStorage after removing the product.
            localStorage.setItem('newproducts', JSON.stringify(array));
        }
    });
      
       updateBtn=document.getElementById('updateBtn')          
      updateBtn.addEventListener('click',function(){

        let productName = document.getElementById('productName').value;  
        let productDesc = document.getElementById('productDescription').value;  
        let productPrice = document.getElementById('productPrice').value;  
        let productImage = document.getElementById('productImage').value;  
        let productID= document.getElementById('id').value;
        let productSize=document.getElementById('productsize').value;
        let productinfo=document.getElementById('productinfo').value;

        if(checkbox.checked){
       if(productName!==''){product.name=productName}
       if(productSize!==''){product.size= productSize}
       if(productDesc!==''){product.description= productDesc}
       if(productPrice!==''){product.price= productPrice}
       if(productImage!==''){product.image=productImage}
       if(productID!==''){product.id=productID}
      
       if(productinfo!==''){product.info= productinfo}
       localStorage.setItem('newproducts', JSON.stringify(array));
      location.reload();
     
        }
       
    })  
})


    const addProductForm = document.getElementById('productForm'); 
   




    
                 











})//end of load-------------------------------------------------------


function validateproductname(){
    return productname.value.match(/^[a-zA-Z]+$/);

}
function productdescription(){
    return document.getElementById('productDescription').value.match(/^[a-zA-Z0-9\s.,!?'"()]+$/);

}
function validateprice(){
    return document.getElementById('productPrice').value.match(/^\$?[0-9]+(?:\.[0-9]{1,2})?$/);
}
/*function productinfo(){
    return document.getElementById('productinfo').value.match()
}*/
/*function validateimage(){

    return document.getElementById('productImage').value.match(/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/);
}*/

let bag=document.getElementById('bag');
bag.addEventListener('click',function(){
   window.location.href='shoppingcart.html';
})
