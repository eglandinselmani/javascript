//function printNames(){
    //document.write("john")
   // document.write("<br>")
   // setTimeout(function(){document.write('anna');}, 3000);
  //  document.write('bob');
//}

//printNames();

var colors =["red", "green", "blue", "purple"]

function changes (){
  document.querySelector('body').style.background =
    colors[Math.floor(Math.random)*colors.length()]
}

setInterval (changes,1000);

var colors =["eglandini", "rita", "joni", "lorisi"]

function changeName (){
  document.querySelector('body').style.background =
    colors[Math.floor(Math.random)*names.length()]
}

setInterval (changeName,1000);
setInterval (1000);

