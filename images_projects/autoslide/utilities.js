let imageNumber = 0;
showSlides();
function showSlides(){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    imageNumber++;   
    for(let i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[imageNumber-1].style.display= "block";
    dots[imageNumber-1].className += " active";
    console.log(slides[imageNumber-1], dots[imageNumber-1]);
    // console.log(slides[imageNumber], dots[imageNumber]);
    if(imageNumber>=slides.length){
        imageNumber = 0;
    }
    setTimeout(showSlides, 1000);
}