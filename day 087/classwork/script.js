let images = ["https://png.pngtree.com/png-clipart/20230126/original/pngtree-fresh-red-apple-png-image_8930987.png", "https://th.bing.com/th/id/R.40f27c68ee0115cf786c4ccfac5e55b5?rik=vwbz8F6NYMRnaQ&pid=ImgRaw&r=0", "https://daily.jstor.org/wp-content/uploads/2020/06/the_great_grape_graft_that_saved_wine_forever_1050x700.jpg"];
let num = 0;
let img = document.querySelector('.slider');
function next(){
    num++;
    if (num >= images.length){
        num = 0;
    }
    img.style.display = "none"
    img.style.position = "relative"
    img.style.left = "500px"
    img.src = images[num]
    img.style.display = "inline"
    img.style.transform = "translateX(-500px)"
}
function previus(){
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    img.src = images[num]
}