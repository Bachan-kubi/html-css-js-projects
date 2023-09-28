function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("close").style.display = "none";
}

let indexing = 1;

function plusBtn(n) {
  showImg(indexing += n);
}
function currentSlides(n) {showImg(indexing = n)}

function showImg(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let demo = document.getElementsByClassName("demo");
    if (n > slides.length) {
      indexing = 1;
    }
    if (n < 1) {
      indexing = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < demo.length; i++) {
      demo[i].className = demo[i].className.replace(" active", "");
    }
    slides[indexing - 1].style.display = "block";
    demo[indexing - 1].className += " active";
  }
  
showImg(indexing)
