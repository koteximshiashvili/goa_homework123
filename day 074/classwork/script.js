const myDiv = document.querySelector("div");

myDiv.innerHTML += `
    <p>hello</p>
    <p>hi</p>    
    <p>helo</p>  
    <button class="btn">click me!</button>    
    <button>click me!</button>
    <span class="hi">hi</span>     
`
document.querySelector('.hi').style.backgroundColor = "red"
document.querySelector('.btn').addEventListener('click', function(){
    alert("hello")
})