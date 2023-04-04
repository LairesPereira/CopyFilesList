import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output} from 'node:process';
import process from 'node:process'
import { existsSync } from 'node:fs'

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

// shows an error messagem if users path is invalid
// and call once again the same function.

const getOriginPath = async function() {
    let paths = []
    let pathErrorMessage = 'path does not exists'
    const answer = await rl.question('Insert the origin folder of the files: \n');
    console.log(answer)
    

}

export default {
    getOriginPath: getOriginPath,
}