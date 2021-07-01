$(document).ready(function (){
  $("#login_form").submit(function (e){
    e.preventDefault();
    alert("You have login successfuly");
    window.location.href = "login.html";
  });

});