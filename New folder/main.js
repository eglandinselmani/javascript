/*var input = document.getElementById("text_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");
button.onclick = function(){

    text.innerHTML = input.value;
}*/

//var text = "LoremLoremLoremLoremLoremLorem";
//var result = text.search("Digital School");
//document.getElementById("result1").innerHTML =result;

//var text = "LoremLoremLoremLoremLoremLorem";
//var result = text1.replace(/Digital School/, "Another school");
//document.getElementById("result1").innerHTML =result1;

var text = "LoremLoremLoremLoremLoremLorem";
var regex = /[0-9]/g
document.getElementById("result3").innerHTML = text.match(regex);
