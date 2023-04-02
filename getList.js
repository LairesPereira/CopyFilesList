const { readLine } = require('./readUserInput.js')

// Ask what files the user is looking for
const getUsersList = async function() {
        return new Promise ((resolve, reject) => {
            let listFiles = []
            readLine.question('Quais arquivos você está procurando?', listInput => {
            listFiles = listInput.split('.').join('.CR3').split(' ')
            listFiles = listFiles.map(file => file.replace(',', '')) 
            resolve(listFiles)
        })
    });
} 

exports.getUsersList = getUsersList






