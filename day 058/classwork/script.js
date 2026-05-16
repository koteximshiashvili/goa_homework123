const me = {
    firstName: 'Kote',
    lastName: 'Ximshiashvili',
    age: 11,
    skinColor: 'light Brown',
    country: 'Georgian',
    hobbies: ['Reading', 'coding', 'tennis']
}
console.log(me);

me.skinColor = 'white';
me.age = 12;

me.FavoriteFood = 'xinkali';
me.city = 'batumi';

delete me.age;

console.log(me);

