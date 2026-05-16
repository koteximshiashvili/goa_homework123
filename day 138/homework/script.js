let arr = [
    {
      img: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
      price: '5.99',
      name: 'Chocolate Cake'
    },
    {
      img: 'https://stateofdinner.com/wp-content/uploads/2023/03/philadelphia-cheesecake-featured.jpg',
      price: '6.49',
      name: 'Cheesecake'
    },
    {
      img: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg',
      price: '7.99',
      name: 'Tiramisu'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.bEjC8PjYV5pHUfU09PpMoAHaEc?rs=1&pid=ImgDetMain',
      price: '4.99',
      name: 'Apple Pie'
    },
    {
      img: 'https://inspirationseek.com/wp-content/uploads/2016/02/Ice-Cream-Pictures.jpg',
      price: '3.49',
      name: 'Ice Cream'
    },
    {
      img: 'https://sugargeekshow.com/wp-content/uploads/2022/09/1200chocolate_cupcakes_featured-2-.jpg',
      price: '2.99',
      name: 'Cupcake'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.4oNyMTWs8b9VJ_3eRsZrzwHaLH?rs=1&pid=ImgDetMain',
      price: '8.99',
      name: 'Crème Brûlée'
    },
    {
      img: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9.jpg',
      price: '6.49',
      name: 'Banana Split'
    },
    {
      img: 'https://www.wellplated.com/wp-content/uploads/2021/05/Delicious-Fruit-Salad.jpg',
      price: '5.49',
      name: 'Fruit Salad'
    }
  ];
let arr1 = []
function addToCart(button, buttonParent){
    let price = parseFloat(buttonParent.querySelector('.price').textContent)
    if (button.textContent === "Add to cart"){
        button.textContent = "Remove from cart"
        if(!arr.includes(price)){
            arr1.push(price)
        }
    }
    else{
        let index = arr1.indexOf(price)
        if (index > -1){
            arr1.splice(index, 1)
        }
        button.textContent = 'Add to cart'
    }
    renderCart()
}
function renderCart(){
    document.querySelector('span').innerHTML = "Order Total: " + "$" + getTotalPrice(arr1)
}
function getTotalPrice(arr){
    let count1 = 0
    for(let i of arr){
        count1 += i
    }
    return count1.toFixed(2)
}
function renderProducts(array){
    array.forEach(product => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const nameH3 = document.createElement('h3');
        const priceP = document.createElement('p');
        const button = document.createElement('button');
        div.className = "bg-gray-500 w-60 h-70 rounded-md p-6 flex-col text-center space-y-1";
        nameH3.className = 'text-2xl font-bold';
        nameH3.textContent = product.name;

        img.className = 'w-50 h-30 rounded';
        img.src = product.img;

        priceP.className = 'price';
        priceP.textContent = product.price;

        button.className = "rounded w-40 h-10 text-2xl font-bold bg-white border-4 border-orange-400 cursor-pointer";
        button.textContent = 'Add to cart';
        button.addEventListener('click', function () {
            addToCart(this, div);
            console.log(this)
        });

        div.append(img, nameH3, priceP, button);
        document.querySelector('#products').appendChild(div);
    });
}
renderProducts(arr)