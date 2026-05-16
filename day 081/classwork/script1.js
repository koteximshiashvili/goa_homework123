const circle = document.querySelector(".circle");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    circle.style.transform = "translateY(-150px)";
    setTimeout(function(){
        circle.style.transform = "translateY(0)";
    }, 10);
});