function getNames(objects) {
    const names = [];
    for (let i = 0; i < objects.length; i++) {
        names.push(objects[i].name);
    }
    return names;
}

const items = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 20 },
    { name: 'Item 3', value: 30 }
];

const names = getNames(items);
console.log(names);
