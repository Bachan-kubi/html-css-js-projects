let imgTracker = 1;
function plusSlides(n){
    showSlider(imgTracker += n);
}
function imgControl(n){
    showSlider(imgTracker = n)
}
function showSlider(n){
    let i;
    let slides = document.getElementsByClassName('slidingImg');
    let demos = document.getElementsByClassName('demo');
    let caption = document.getElementById('captions');
    if(n>slides.length){imgTracker = 1}
    if(n<1){imgTracker = slides.length}
    for(i=0; i<slides.length; i++){
        console.log(slides[i]);
        slides[i].style.display = "none";
    }
    for(i=0; i<demos.length; i++){
        demos[i].className = demos[i].className.replace(" active", "")
    }
    slides[imgTracker-1].style.display = "block";
    demos[imgTracker-1].className = " active";
    caption.innerHTML = demos[imgTracker-1].alt;
}
showSlider();








// let slideIndex = 1;

// function plusSlides(n){
//     console.log('clicked prev, next button')
//    showSlides(slideIndex += n)
// }
// function imgControl(n){
//     console.log(n)
//     showSlides(slideIndex = n)
// }

// function showSlides(n){
//     let i;
//     let slides = document.getElementsByClassName('slidingImg');
//     let demos = document.getElementsByClassName('demo');
//     let captions = document.getElementById('captions');
//     console.dir(demos[slideIndex])
//     if(n>slides.length){
//         slideIndex = 1;
//     }
//     if(n<1){
//         slideIndex = slides.length
//     }
//     for(i=0; i<slides.length;i++){
//         slides[i].style.display = "none";
//     }
//     for(i=0; i<demos.length;i++){
//         demos[i].className = demos[i].className.replace(" active", "")
//     }
//     slides[slideIndex-1].style.display = "block";
//     demos[slideIndex-1].className += " active";
//     captions.innerHTML = demos[slideIndex-1].alt;
// }
// showSlides();