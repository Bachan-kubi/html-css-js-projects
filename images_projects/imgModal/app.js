let container = document.getElementById("model-container");
let modelling = document.getElementById("myModel");
let caption = document.getElementById('caption');
let modelImage = document.getElementById('myImage');
let close = document.querySelector(".close");


// method 1

// modelImage.onclick = function(){
//     container.style.display = 'block';
//     modelling.src = modelImage.src;
//     caption.innerHTML = modelImage.alt;
// }

// method-2

modelImage.addEventListener('click', ()=>{
    container.style.display = 'block';
    modelling.src = modelImage.src;
    caption.innerHTML = modelImage.alt;
});
// close button 
close.addEventListener("click", ()=>{
    container.style.display = "none";
});
modelling.addEventListener("click", ()=>{
    container.style.display = "none";
} )



