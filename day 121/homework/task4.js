function textColor(color){
    document.querySelector("p").style.color = color;
}
function func(color, callback){
    setTimeout(() => {
        callback(color)
    }, 2000);
};

func("red", textColor)