$(document).ready(function(){
//  prompt("who are you");
});

function bmi(){
    var height=parseFloat(document.getElementById("input1").value);
    var weight=parseFloat(document.getElementById("input2").value);
    var BMI=weight/(height/100*height/100);

    document.getElementById("input3").value=BMI;
    
}