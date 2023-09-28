let model = document.getElementById("model-container");
let image = document.getElementById("myImage");
let myModel = document.getElementById("myModel");
let caption = document.getElementById("caption");
console.log(model, image, myModel, caption);

image.addEventListener("click", ()=>{
    model.style.display = "block";
    myModel.src = image.src;
    caption.innerHTML = image.alt;
});

// make fucntionl to close button
let close = document.getElementsByClassName("close");
console.log(close);
close[0].addEventListener("click", ()=>{
    model.style.display = "none";
});
model.addEventListener("click", ()=>{
    model.style.display = "none";
});