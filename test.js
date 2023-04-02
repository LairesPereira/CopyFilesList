const { copyFile, constants} = require('node:fs');
const fs  = require('fs')

let originFolder = '/Users/dev/Documents/dev/de onde para onde/cp_test_files/origin/'
let destinationFolder = '/Users/dev/Documents/dev/de onde para onde/cp_test_files/destination/'
let filesToCopy

const letsCopyBaby = () => {
    console.log('tentando ler a pasta')
    fs.promises.readdir(originFolder).then(filesList => {
        console.log('arquivos para copiar:', filesList)
        filesToCopy = filesList
        for (const file in filesToCopy) {
            console.log('Copiando: ', originFolder + filesToCopy[file])
            fs.copyFile(originFolder + filesToCopy[file], destinationFolder + filesToCopy[file], (err) => {
                console.log(err)
            })
        }
    })
}

letsCopyBaby()