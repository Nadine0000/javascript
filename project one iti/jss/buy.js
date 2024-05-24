window.addEventListener('load', function () {

/*window.onload = function () {
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
}*/
// to make validation on it 



    let username=document.getElementById('name');

    username.addEventListener('blur',function(){
       if (!validateusername()){
              this.className='incorrect';
              this.focus();
             this.select();
       }
       else{
           this.className='correct';
       }
    })//end of blur the username

    let email=document.getElementById('email');

    email.addEventListener('blur',function(){
       if (!validateemaile()){
              this.className='incorrect';
              this.focus();
             this.select();
       }
       else{
           this.className='correct';
       }

    })//end of validate email

    let phonenumber=document.getElementById('phone');
    phonenumber.addEventListener('blur',function(){
        if (!validatephone()){
               this.className='incorrect';
               this.focus();
               this.select();
        }
        else{
            this.className='correct';
        }


    })//end of validate phone number

    let address=document.getElementById('address');
    address.addEventListener('blur',function(){
        if (! validateaddress()){
               this.className='incorrect';
               this.focus();
               this.select();
        }
        else{
            this.className='correct';
        }


    })//end of validate phone number

    let creditcard=document.getElementById('creditCard');
    creditcard.addEventListener('blur',function(){
        if (!validatecreditcard()){
               this.className='incorrect';
               this.focus();
               this.select();
        }
        else{
            this.className='correct';
        }


    })//end of validate phone number


   


 



 //this.document.forms[0].addEventListener('submit',function(e){
    
   /* const username=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const address=document.getElementById('address').value;


    if(!( validateusername() && validateemaile() && validatephone()&& validateaddress()&&validatecreditcard())) {
       e.preventDefault();
       alert("Please complete your data!");
       return;
   }
   var currentUserValue = localStorage.getItem('currentuser');

   JSON.parse(localStorage.getItem('currentuser')).name


   
   if (currentUserValue) {
    var currentUser = JSON.parse(currentUserValue);

    // Check if 'ema' property exists in 'currentuser'
    if (currentUser && JSON.parse(localStorage.getItem('currentuser')).ema) {
        Email.send({
            SecureToken: "dffaae83-0728-4cd3-96ad-53e7e77bf260",
            To: JSON.parse(localStorage.getItem('currentuser')).ema,
            From: "nadinenabil0000@gmail.com",
            Subject: email,
            Body: address
        }).then(
            message => {
                alert(message);
                //document.forms[0].reset();
            }
        );
        alert('congratulations!')
    } }*/

    
    
 
 /*this.document.forms[0].addEventListener('reset',function(e){

    if(!(confirm("Do you want to clear all your data?")))
    {
        e.preventDefault();
    }
  
  
   })//end of validate form reset------------------------
 



   let bag=document.getElementById('bag');
   bag.addEventListener('click',function(){
      window.location.href='shoppingcart.html';
   })
})//end of load

function validateusername(){
    return  document.getElementById('name').value.match( /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/);
}
 
function  validateemaile(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  document.getElementById('email').value.match(emailPattern);
 }
 
    
 function validatephone(){

    let phonepattern=/^01\d{9}$/;
    
    return  document.getElementById('phone').value.match(phonepattern);
 }
 function validateaddress(){

    
    return  document.getElementById('address').value.match( /^[0-9A-Za-z\s\.,#-]+$/);


 }
 function validatecreditcard(){

    
    return  document.getElementById('creditCard').value.match(  /^\d{16}$/);


 }*/


    
    
    emailjs.init("Zt_oemr5CGar2Fz60");

    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        console.log("ggggggggggggg");

        function sendMail() {
            var params = {
                to: JSON.parse(localStorage.getItem('currentuser')).ema,
                name: JSON.parse(localStorage.getItem('currentuser')).name
            };

            var serviceID = "service_icgpnvc"; // Email Service ID
            var templateID = "template_bvebame"; // Email Template ID

            emailjs.send(serviceID, templateID, params)
                .then(res => {
                    alert("Email sent successfully!!");
                })
                .catch(error => {
                    console.error("Email sending failed:", error);
                });
        }

        sendMail();
    });



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
              localStorage.removeItem('currentuser');}

              this.document.forms[0].addEventListener('reset',function(e){

                if(!(confirm("Do you want to clear all your data?")))
                {
                    e.preventDefault();
                }
              
              
               })//end of validate form reset------------------------
             
            
            
            
               let bag=document.getElementById('bag');
               bag.addEventListener('click',function(){
                  window.location.href='shoppingcart.html';
               })
})})
