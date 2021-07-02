$(document).ready(function (){
  $("#registration_form").submit(function (e){
    e.preventDefault();
    alert("You have registered successfuly");
    window.location.href = "login.html";
  });

});