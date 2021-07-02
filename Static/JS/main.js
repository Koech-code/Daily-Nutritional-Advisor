$(document).ready(function(){
//  prompt("who are you");
});

function bmi(){
    var height=parseFloat(document.getElementById("input1").value);
    var weight=parseFloat(document.getElementById("input2").value);
    var BMI=weight/(height/100*height/100);
    if(height>200){
      alert("Your height is too extreme. Please input another value.")
    } else{
    document.getElementById("input3").value=BMI.toFixed(2);
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
}
}