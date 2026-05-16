let cards1 = [
    { name: 'Card 1', number: 10, rating: 8, image: 'https://th.bing.com/th/id/OIP.5mSxbyZkchbPhyfzdbAq9gHaE7?rs=1&pid=ImgDetMain' },
    { name: 'Card 2', number: 20, rating: 5, image: 'https://www.hdwallpapersfreedownload.com/uploads/large/fruits/gorgeous-mix-fresh-fruits-hd.jpg' },
    { name: 'Card 3', number: 30, rating: 9, image: 'https://i.pinimg.com/originals/17/14/69/171469519d57e63bf0cb18c3257797e3.jpg' },
    { name: 'Card 4', number: 40, rating: 6, image: 'https://th.bing.com/th/id/R.2e261324056b5e44fe9b8d5d63236659?rik=fx1FQuH5hlt03w&pid=ImgRaw&r=0' },
    { name: 'Card 5', number: 50, rating: 7, image: 'https://wallpaperaccess.com/full/1101708.jpg' },
    { name: 'Card 6', number: 60, rating: 8, image: 'https://www.nutritionalbenefits.co.uk/wp-content/uploads/2014/11/Fruit-Blog.jpg' },
    { name: 'Card 7', number: 70, rating: 3, image: 'https://th.bing.com/th/id/R.bf70155a4dfd37a4213763f641ce173b?rik=mVrK%2fkxRL5A6Zw&riu=http%3a%2f%2fattemptnwin.com%2fwp-content%2fuploads%2f2014%2f10%2ffruits2.jpg&ehk=00jfR2bVaUX1cydZBvNLOUMchFNyHd%2f4jztW%2fRmBEfM%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Card 8', number: 80, rating: 9, image: 'https://th.bing.com/th/id/R.7f92ca1177d6b53554fb1abe18179100?rik=038q%2br6MtDOtDw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f61%2fSummer_Fruits.jpg&ehk=anDRW9p5ycWsydg8VTbOWDq6IB912Ayt6e0qj3OMXoE%3d&risl=1&pid=ImgRaw&r=0' },
    { name: 'Card 9', number: 90, rating: 4, image: 'https://th.bing.com/th/id/OIP.ww_GNBmev6ENCZ1YtC2mywHaE7?rs=1&pid=ImgDetMain' },
    { name: 'Card 10', number: 100, rating: 10, image: 'https://th.bing.com/th/id/R.f1172841334b46bc6774b075ed015993?rik=1wlpSbk7u2ntDA&pid=ImgRaw&r=0' },
  ];
  
  let box = document.getElementById('card-box');
  
  function Cards(cards) {
    box.innerHTML = '';
    for (let j = 0; j < cards.length; j++) {
      let div = document.createElement('div');
      div.className = 'card-item';
      
      div.innerHTML = `
        <img src="${cards[j].image}" alt="${cards[j].name}">
        <div class="card-content">
          <h3>${cards[j].name}</h3>
          <p>Number: ${cards[j].number}</p>
          <div class="card-rating">Rating: ${cards[j].rating}</div>
        </div>
      `;
      
      box.appendChild(div);
    }
  }
  
  
  Cards(cards1);
  
  
  function func(a) {
    let allCards = [...cards1];
  
    if (a === 'asc') {
      allCards.sort((a, b) => a.rating - b.rating);
      Cards(allCards);
    } else if (a === 'desc') {
  
      allCards.sort((a, b) => b.rating - a.rating);
      Cards(allCards);
    } else if (a === 'random') {
  
      allCards.sort(() => Math.random() - 0.5);
      Cards(allCards);
    }
  }