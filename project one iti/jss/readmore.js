window.addEventListener('load',function(){
    var targetdiv = this.document.getElementById('imagepreview');
           allimages=document.images;
          let mainimg= document.getElementById('main');
for (var i = 0; i < allimages.length; i++) {
    allimages[i].addEventListener('mouseover', function (e) {
        targetdiv.style.backgroundImage = "url(" + this.src + ")";

    });//end of mouse over
    allimages[i].addEventListener('mouseout', function (e) {
        targetdiv.style.backgroundImage = "url(" + mainimg.src + ")";

       let but= document.getElementById('buttonbuy');
       but.addEventListener('click',function(){
        

       })




    });//end of mouse out
}






})