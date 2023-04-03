import rl from "./readUserInput.js";

// Ask what files the user is looking for
const getInput = async function () {
    return new Promise ((resolve, reject) => {
        console.log('What files are you looking for?')
        rl.on('line', (list) => {
            if(list != ''){
                resolve(list.split(' '))
            } reject('List cant be empty!')
          });
    });
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
