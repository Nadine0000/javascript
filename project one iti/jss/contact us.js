
window.addEventListener('DOMContentLoaded', function () {
  this.document.forms[0].addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission

      const name = document.getElementById('name').value;
      const email = document.getElementById('Email').value;
      const subject = document.getElementById('subject').value;
      const msg = document.getElementById('message').value;

      if (!(validatesubject() && validateusername() && validateemail() && validatemsg())) {
          e.preventDefault();
          alert("Please complete your data!");
          return;
      }
       
      Email.send({
          SecureToken: "dffaae83-0728-4cd3-96ad-53e7e77bf260",
          To: 'nadinenabil0000@gmail.com',
          From: "nadinenabil0000@gmail.com",
          Subject:   email,
          Body: msg
      }).then(
          message => {
              alert(message);
              document.forms[0].reset();
          }
      );
  });

  this.document.getElementById('name').addEventListener('blur', function () {
      if (!validateusername()) {
          this.className = 'incorrect';
          this.focus();
          this.select();
      } else {
          this.className = 'correct';
      }
  });

  this.document.getElementById('Email').addEventListener('blur', function () {
      if (!validateemail()) {
          this.className = 'incorrect';
          this.focus();
          this.select();
      } else {
          this.className = 'correct';
      }
  });

  this.document.getElementById('subject').addEventListener('blur', function () {
      if (!validatesubject()) {
          this.className = 'incorrect';
          this.focus();
          this.select();
      } else {
          this.className = 'correct';
      }
  });

  this.document.getElementById('message').addEventListener('blur', function () {
      if (!validatemsg()) {
          this.className = 'incorrect';
          this.focus();
          this.select();
      } else {
          this.className = 'correct';
      }
  });

  let bag=document.getElementById('bag');
   bag.addEventListener('click',function(){
      window.location.href='shoppingcart.html';
   })
});

function validateemail() {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return document.getElementById('Email').value.match(emailPattern);
}

function validateusername() {
  return document.getElementById('name').value.match(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/);
}

function validatesubject() {
  return document.getElementById('subject').value.match(/^[a-zA-Z0-9\s]+$/);
}

function validatemsg() {
  return document.getElementById('message').value.match(/^[a-zA-Z0-9\s.,!?]+$/);
}