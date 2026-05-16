class RandomHelper{
    static get randomChar(){
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomchar = alphabet[Math.floor(Math.random() * alphabet.length)];
        return "random char: " + randomchar;
    };
    static get randomNumber(){
        return Math.floor(Math.random() * 1000);
    }
    static randomName(list){
        return list[Math.floor(Math.random() * list.length)];
    }
};