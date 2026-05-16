import {arr} from './product.mjs';
let count = 0
let arr1 = []
export function addToCart(button, buttonParent){
    let price = parseInt(buttonParent.querySelector('.price').textContent)
    if (button.textContent === "Add to cart"){
        button.textContent = "Remove from cart"
        if(!arr.includes(price)){
            count += 1
            arr1.push(price)
        }
    }
    else{
        count -= 1
        let index = arr1.indexOf(price)
        if (index > -1){
            arr1.splice(index, 1)
        }
        button.textContent = 'Add to cart'
    }
    renderCart()
}
export function renderCart(){
    document.querySelector('span').innerHTML = count + " " + "total: " + getTotalPrice(arr1)
}
export function getTotalPrice(arr){
    let count1 = 0
    for(let i of arr){
        count1 += i
    }
    return count1
}