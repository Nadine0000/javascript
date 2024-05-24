window.onload = function () {
    let dynamicLink = document.getElementById("dynamicLink");

    if (JSON.parse(localStorage.getItem('i')) == null || JSON.parse(localStorage.getItem('i')) == 0) {
        dynamicLink.innerText = 'Sign in';
    } else if (JSON.parse(localStorage.getItem('i')) == 1) {
        dynamicLink.innerText = 'Sign out';
    }}


    window.addEventListener('load',function(){
      
        let bag=document.getElementById('bag');
        bag.addEventListener('click',function(){
           window.location.href='shoppingcart.html';
        })


    })