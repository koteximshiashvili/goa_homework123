let images = ["https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?rs=1&pid=ImgDetMain", "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?cs=srgb&dl=casual-daylight-face-936119.jpg&fm=jpg", "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg", "https://th.bing.com/th/id/OIP.aPrAXebVFheO1nA-8qU47gAAAA?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.0aFgg-TbbJhzNkaStTHV9wHaLH?rs=1&pid=ImgDetMain", "https://c.pxhere.com/photos/a0/c7/man_guy_male_stubble_jacket-98132.jpg!d", "https://c.stocksy.com/a/i8J500/z9/1265216.jpg", "https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/guybolton-photo-deadline.jpg", "https://th.bing.com/th/id/OIP.PmOycd0-5F4MOgY7cBXmJgHaKX?rs=1&pid=ImgDetMain", "https://static6.depositphotos.com/1155356/659/i/950/depositphotos_6596844-stock-photo-average-blue-collar-guy.jpg"]
let data = ''
async function getUser(index){
    try{
    let fetchedData = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!fetchedData.ok){
        throw new Error("Error.")
    }
    data = await fetchedData.json()
    document.body.innerHTML += `
        <div class='user'>
            <div class="img">
                <img src=${images[index]}>
            </div>
            <img src=${images[index]} class="img1">
            <p class="name">${data[index].name}</p>
            <p class="company">${data[index].company.name}</p>
            <div class="d">
                <span>city: ${data[index].address.city}</span>
                <span>email: ${data[index].email}</span>
                <span>user: ${data[index].username}</span>
            </div>
            <button>Follow</button>
        </div>
    `
    }catch(err){
        console.error(err)
    }
};
for(let i = 0; i < 10; i++){
    getUser(i)
}
