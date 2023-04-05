import * as readline from 'node:readline/promises';
import process from 'node:process'
import { access } from 'node:fs/promises';

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

const getOriginPath = async function() {
    const originPathRequested = await rl.question('Insert the origin folder of the files: \n');
    try {
        await access(originPathRequested)
        return originPathRequested
    } catch (err) {
        console.log(err.message)
    }
}

const getDestinationPath = async function() {
    const destinationPathRequested = await rl.question('Insert the destination folder of the files: \n');
    try {
        await access(destinationPathRequested)
        return destinationPathRequested
    } catch (err) {
        console.log(err.message)
    }
}

export default {
    getOriginPath: getOriginPath,
    getDestinationPath: getDestinationPath
}