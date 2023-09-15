let slideIndex = 1;

// previues button
function plusSlides(n){
    showSlides(slideIndex += n)
}
// image control
function controlImg(n){
    showSlides(slideIndex = n)
}


function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(let i=0; i<slides.length; i++){
        // console.log(slides[i]);
        slides[i].style.display = 'none';
    }
    for(let i=1; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);
