import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output, stderr as stderr} from 'node:process';

console.log(input)
const rl = readline.createInterface({ input, output, terminal: false });

await rl.question('What do you think of Node.js? ', (answer) => {
    console.log(answer)
});




// IMG_2026. , IMG_2027. ,IMG_2028. ,IMG_2029. ,IMG_2030. , IMG_2031