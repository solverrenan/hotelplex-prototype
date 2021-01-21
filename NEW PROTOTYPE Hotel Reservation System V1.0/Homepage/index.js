$(function () {
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        orientation: "button"
    });
});

  //display username
  /*window.addEventListener('load', () => {
    const username = localStorage.getItem("USERNAME");
    const contact = localStorage.getItem('CONTACT');

    document.getElementById('username-display').innerHTML = username;
  });*/

function logoutValidation() {
  location.replace("reglog.html")
  return false;
}

//Comment or Suggestions Validation
(function() {
    'use strict';
    window.addEventListener('load', () =>{
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit-suggestion', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var user = localStorage.getItem("usernameE");
  var contact = localStorage.getItem("contactE");
  document.getElementById('username-display').innerHTML = user;
  document.getElementById('username-logout').innerHTML = user;
  document.getElementById('contact-display').innerHTML = contact;

function checkoutSingle(){
  const single ={
    title:'Single Package',
    price:'8,500.00',
    availroom:'ONLY 1 LEFT',
    availdate:'NOW!',
    numper:'MAX IS 1 PERSON',
    discount:'10%'
  };

  const params = new URLSearchParams(single)
  location.href = "/PaymentGate.html?" + params.toString();
}

function checkoutDouble(){
  const double ={
    title:'Double Package',
    price:'10,000.00',
    availroom:'ONLY 1 LEFT',
    availdate:'NOW!',
    numper:'MAX IS 2 PERSON',
    discount:'10%'
  };

  const params = new URLSearchParams(double)
  location.href = "/PaymentGate.html?" + params.toString();
}

function checkoutQueen(){
  const queen ={
    title:'Queen Package',
    price:'12,500.00',
    availroom:'ONLY 1 LEFT',
    availdate:'NOW!',
    numper:'MAX IS 3 PERSON',
    discount:'25%'
  };

  const params = new URLSearchParams(queen)
  location.href = "/PaymentGate.html?" + params.toString();
}

function checkoutKing(){
  const king ={
    title:'King Package',
    price:'15,000.00',
    availroom:'ONLY 1 LEFT',
    availdate:'NOW!',
    numper:'MAX IS 5 PERSON',
    discount:'25%'
  };

  const params = new URLSearchParams(king)
  location.href = "/PaymentGate.html?" + params.toString();
}