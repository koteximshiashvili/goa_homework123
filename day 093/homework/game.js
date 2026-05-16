let cookies = 0;
let gold = 0;
let bigThumbLevel = 0;
let betterMinesLevel = 0;
let doubleCookiesLevel = 0;

document.getElementById('cookieButton').addEventListener('click', () => {
    cookies += 1 + bigThumbLevel;
    gold += 1 + betterMinesLevel;
    updateDisplay();
});

document.getElementById('bigThumb').addEventListener('click', () => {
    let bigThumbCost = 50 * calculateCost(bigThumbLevel); 
    if (gold >= bigThumbCost) {
        gold -= bigThumbCost;
        bigThumbLevel++;
        updateDisplay();
    }
});

document.getElementById('betterMines').addEventListener('click', () => {
    let betterMinesCost = 100 * calculateCost(betterMinesLevel);
    if (cookies >= betterMinesCost) {
        cookies -= betterMinesCost;
        betterMinesLevel++;
        updateDisplay();
    }
});

document.getElementById('doubleCookies').addEventListener('click', () => {
    let doubleCookiesCost = 200 * calculateCost(doubleCookiesLevel);
    if (gold >= doubleCookiesCost) {
        gold -= doubleCookiesCost;
        doubleCookiesLevel++;
        updateDisplay();
    }
});

function calculateCost(level) {
    let cost = 1;
    for (let i = 0; i < level; i++) {
        cost *= 2;
    }
    return cost;
}

function updateDisplay() {
    document.getElementById('cookies').textContent = cookies;
    document.getElementById('gold').textContent = gold;

    let bigThumbCost = 50 * calculateCost(bigThumbLevel);
    let betterMinesCost = 100 * calculateCost(betterMinesLevel);
    let doubleCookiesCost = 200 * calculateCost(doubleCookiesLevel);

    document.getElementById('bigThumb').textContent = `Big Thumb - ${bigThumbCost} Gold`;
    document.getElementById('betterMines').textContent = `Better Mines - ${betterMinesCost} Cookies`;
    document.getElementById('doubleCookies').textContent = `Double Cookies - ${doubleCookiesCost} Gold`;
}
