import * as readline from 'node:readline/promises';
import process from 'node:process'

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// Ask what files the user is looking for
const getInput = async function () {
        const userListInput = await rl.question('What files are you looking for? \n')
        if(userListInput != ' ') {
            let filesToCopy = userListInput.split(' ')
            console.log(filesToCopy)
            console.log('Arquivos que serão procurados: \n', filesToCopy) 
            return userListInput             
        }
} 

const fileExtension = async function() {
    return new Promise ((resolve) => {
        console.log('What is the extension?')
        rl.on('line', (answer) => {
            if(answer === '') {
                console.log('Os arquivos serão copiados sem restrição de formato')
                resolve(answer)
            }
          resolve(answer)
    });
})
}

export default {
    list: getInput,
    fileExtension: fileExtension
}
