
class Animal{
    constructor(image, name, age, eats){
        this.image = image;
        this.name = name;
        this.age = age;
        this.food = eats;
    }
    displayProduct(){
        return `
            <div class="item">
                <img src="${this.image}">
                <p class="item-name">name: ${this.name}</p>
                <p class="item-age">age: ${this.age}</p>
                <p class="item-food">eats: ${this.food}</p>
            </div>
        `;
    }
}

class KingAnimal extends Animal{
    // constructor(image, name, age, eats){
    //     super(image, name, age, eats)
    // }
    displayProduct(){
        return `
            <div class="item">
                <img src="${this.image}">
                <p class="item-name">King name: ${this.name}</p>
                <p class="item-age">King age: ${this.age}</p>
                <p class="item-food">King eats: ${this.food}</p>
            </div>
        `;
}
}


class Wikipedia{
    constructor(items){
        this.items = items;
    }
    render(){
        this.items.forEach(item => {
            document.querySelector('.animals').innerHTML += item.displayProduct();
        });
    }

}

let arr = [
    new KingAnimal("https://th.bing.com/th/id/R.5c64047cfcb18c4ac2b4d2d7185e3970?rik=8%2fjhb4XQLDRAVQ&pid=ImgRaw&r=0", "lion", 12, "rabbit"),
    new Animal("https://th.bing.com/th/id/R.6e1738a2132230777b37b462283f5af3?rik=NWzL%2brqeNuHzNQ&pid=ImgRaw&r=0", "penguin", 11, "carrot"),
    new Animal("https://th.bing.com/th/id/OIP.5or3H-P94CskwECcfCmY3gHaHa?rs=1&pid=ImgDetMain", "dog", 6, "bone")
]
const app = new Wikipedia(arr);
app.render()