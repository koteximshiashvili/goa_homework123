const fs = require('fs').promises;
const args = process.argv.slice(2);


async function write(){
    try{
        await fs.writeFile('example.txt', args[0]);
    }catch(err){
        console.error(err);
    }
}
write()

const userInput = args.join(' ');

async function main() {
    if (userInput && userInput.toLowerCase() !== 'continue') {
        try {
            await fs.writeFile('userText.txt', userInput + '\n');
        } catch (err) {
            console.error(err);
        }
    }

    try {
        let data;
        try {
            data = await fs.readFile('userText.txt', 'utf8');
        } catch (err) {
            await fs.writeFile('userText.txt', 'Empty()\n');
            data = 'Empty()\n';
        }

        if (data.trim() === '') {
            await fs.appendFile('userText.txt', 'Empty()\n');
        } 
        else if (userInput.toLowerCase() === 'continue') {
            await fs.appendFile('userText.txt', 'smth after continue\n');
        }

    } catch (err) {
        console.error(err);
    }
}

main();

