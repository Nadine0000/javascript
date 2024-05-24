

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
function isUsernameUnique(existingData, newUsername) {
    return !existingData.some(user => user.name === newUsername);
}// to check uniquness 
window.addEventListener('load',function(){

    let username=document.getElementById('username');

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

    let Email=document.getElementById('Email');

    Email.addEventListener('blur',function(){
       if (!validateemaile()){
              this.className='incorrect';
              this.focus();
             this.select();
       }
       else{
           this.className='correct';
       }

    })//end of validate email

    let phonenumber=document.getElementById('number');
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


    let password=document.getElementById('password');
    password.addEventListener('blur',function(){

if(!validatepassword()){
    this.className='incorrect';
    this.focus();
    this.select();
    
}
else{
    this.className='correct';
}
 })//end of blur the password

 
 this.document.forms[0].addEventListener('submit',function(e){
if(!(validatepassword() && validateusername() && validateemaile() && validatephone()))
      
        { e.preventDefault();
         alert(" please complete your data!")}
       else{
            
       /**/



    var existingData = JSON.parse(localStorage.getItem('userinputs')) || [];

    // Create a new user data object
    var newUserData = {
        name: document.getElementById('username').value,
        ema: document.getElementById('Email').value,
        numb: document.getElementById('number').value,
        password: document.getElementById('password').value,
        city: document.getElementById('mycity').value
    };
  
   
    // Add the new user data to the existing data
   if(isUsernameUnique(existingData,newUserData.name)){
    console.log('run')
    existingData.push(newUserData);
    

    // Save the updated data back to local storage
    localStorage.setItem('userinputs', JSON.stringify(existingData));

    alert("Your data has been saved in local storage");
     // create array for every user to add his bag
    var userCart = [];
    localStorage.setItem(`${newUserData.name}'s cart`, JSON.stringify(userCart));
} 
else{
    console.log('az')
    e.preventDefault();
    alert('Sorry,This Name Is Already Exist ')
    
}
       }// for check uniqueness------
        

 })//end of validate form submit---------------------------------------------------

 this.document.forms[0].addEventListener('reset',function(e){

  if(!(confirm("Do you want to clear all your data?")))
  {
      e.preventDefault();
  }


 })//end of validate form reset------------------------

})



// funcitons of validation--------------------------
function validateusername(){
    return username.value.match( /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/);
}
 function validatepassword(){
    return password.value.match(/^(?=.*[a-zA-Z\d]).+$/);
 }
function  validateemaile(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Email.value.match(emailPattern);
 }
 
    
 function validatephone(){

    let phonepattern=/^01\d{9}$/;
    
    return  document.getElementById('number').value.match(phonepattern);
 }

