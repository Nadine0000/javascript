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
    
    

  /*  username.addEventListener('blur',function(){
       if (!validateusername()){
              this.className='incorrect';
              this.focus();
             this.select();
       }
       else{
           this.className='correct';
       }
    })//end of blur the username
   
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
*/

 let password=document.getElementById('password');

 let username=document.getElementById('username');
 let storedUserData = JSON.parse(localStorage.getItem('userinputs')) || [];
let button = document.getElementById('button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  let hamada = false;

  if (username.value === 'nadine' && password.value === '123456') {
    localStorage.setItem('i', 1);
    location.replace('dashboard.html');
  } else {
    for (let i = 0; i < storedUserData.length; i++) {
      if (storedUserData[i].name === username.value && storedUserData[i].password === password.value) {
        location.replace('gallery.html');
        localStorage.setItem(`currentuser`,JSON.stringify(storedUserData[i]));
        localStorage.setItem('i', 1);
        return; // exit the function after redirecting
      } else {
        hamada = true;
      }
    }

    if (hamada) {
      alert('Wrong username or password');
    }
  }
});










/* this.document.forms[0].addEventListener('submit', function (e) {
    if (username.value === 'nadine' && password.value === '123456') {
       location.replace ('dashboard.html');
        e.preventDefault();
        return;
    }

    let storedUserData = JSON.parse(localStorage.getItem('userinputs')) || [];
    
    for (let i = 0; i < storedUserData.length; i++) {
        if (storedUserData[i].name === username.value && storedUserData[i].password === password.value) {
            // Authentication successful, you might want to store user details in session storage or cookies
            return;
        }
    }

    // If no match is found, prevent the default form submission and show an alert
    e.preventDefault();
    alert("Wrong username and password");
});*/





  



})

/*function validateusername(){
    return username.value.match(/^[a-z]{3,6}$/);
}
 function validatepassword(){
    return password.value.match(/^[0-9]{5,7}$/);
 }*/
 
 
