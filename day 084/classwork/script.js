const products = [
    {
        name: "smartphone",
        description: "this is a smartphone",
        price: "400$",
        imageUrl: "https://th.bing.com/th/id/R.01a82bcac69afee61ed99f8d1ae4d495?rik=xT8Q8Rp2owOO6w&riu=http%3a%2f%2fstatic1.businessinsider.com%2fimage%2f5543d7c56bb3f72f7901cee1%2fthe-15-best-smartphones-in-the-world.jpg&ehk=fvMhzfp96Q%2fs0F3r9%2f22%2bhNm2GIEICP5UEzpvwDnLfs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "laptop",
        description: "this is a laptop",
        price: "100000000$",
        imageUrl: "https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?rs=1&pid=ImgDetMain"
    },
    {
        name: "shoe",
        description: "this is a shoe.",
        price: "150$",
        imageUrl: "https://th.bing.com/th/id/OIP.ZxQM47KwVgtd2WpzealytQHaHa?rs=1&pid=ImgDetMain"
    }
];

function products1() {
    const cards = document.querySelector(".cards");

    for (let product = 0; product !== products.length; product++){
        const cardElement = document.createElement("div");
        cardElement.className = 'card'
        cardElement.innerHTML = `
            <img src="${products[product].imageUrl}" alt="${products[product].name}">
            <h3>${products[product].name}</h3>
            <p>${products[product].description}</p>
            <div class="price">${products[product].price}</div>
        `

        cards.appendChild(cardElement);
    };
}

products1();