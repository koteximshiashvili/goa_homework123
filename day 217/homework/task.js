// fs მოდული გვეხმარება შევქმნათ და დავწეროთ რაიმე ფაილში

// readFileSync ელოდება სანამ წაიკითხავს ფუნქცია ფაილს ხოლო readFile არ ელოდება მაგრამ შეგვიძლია await გამოვიყენოთ

// writeFileSync ელოდება სანამ დაწერს ფუნქცია ფაილში ხოლო writeFile არ ელოდება  მაგრამ შეგვიძლია await გამოვიყენოთ
const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}
readFileContent('example.txt');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('success');
  })
}
writeToFile('example.txt', 'hello')

const args = process.argv.slice(2)[0];
writeToFile('text.txt', args)
fs.appendFile('text.txt', '\n hihi', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('success');
})

readFileContent('text.txt')