fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => {
    res.forEach(product => {
      document.body.innerHTML += `
        <div class="card">
          <img src="${product.image}">
          <p class="title">${product.title}</p>
          <p class="category">Category: ${product.category}</p>
          <p class="price">${Math.floor(product.price)}$ <span class="discount">${Math.floor(product.price + 50)}$</span></p>
          <button class="btn" onclick="cart(this, this.parentNode)">Put in cart</button>
        </div>
      `;
    });
  });

let count = 0;
let total = 0;

function cart(button, buttonParent) {
  let price = parseInt(buttonParent.querySelector('.price').textContent.split("$")[0]);
  
  if (button.textContent === "Put in cart") {
    count += 1;
    button.textContent = "Remove from cart";
    total += price;
  } else {
    count -= 1;
    button.textContent = "Put in cart";
    total -= price;
  }
  
  document.querySelector('.cartCount').innerHTML = count;
  document.querySelector('.total').textContent = 'total: ' + total + '$';
}