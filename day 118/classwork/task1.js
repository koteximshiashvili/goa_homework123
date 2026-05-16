function randomizer(list, leaders) {
    for (let i = 0; i < list.length + (list.length - leaders.length); i++) {
        let randomNumber = Math.floor(Math.random() * list.length - 1);

        let deletion = [list[randomNumber], list[randomNumber + 1]];
        leaders[i] += `: ${list[randomNumber]}, ${list[randomNumber + 1]}`;
        list = list.filter(item => !deletion.includes(item));
    }
    return leaders;
}

console.log(randomizer(
    ['mate chikaidze', 'giga kochalidze', 'zuka qoridze', 'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'nika macharashvili', 'ilia dzindzibadze'],
    ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]
));
