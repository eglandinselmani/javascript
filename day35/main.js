var slideIndex= 1;

function showslides(){
    var i;
    var slides; document.getElementsById ("slide");

    for( i=0 ; i<slide.length; i++){
        slide=[i].style.display ="none";
    }


    if(n> slides.length){
        slideIndex=1;
    }

    if(n<1){
        slideIndex = slideIndex
    }
    slides=[slideIndex-1].style.display = "block";
}

showslides(1);

function plusSlides(n){
    slideIndex += n;
    showslides(slideIndex);
}

setInterval(plusSlides, 3000, 1);

