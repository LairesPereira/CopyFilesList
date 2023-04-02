const fs  = require('fs')
const { resolve } = require('path')
const getList = require('./getList')
const getPaths = require('./getPaths')

let originFolder
let destinationFolder
let filesToCopy

// IMG_0326. ,IMG_0327. ,IMG_0330. ,IMG_0354. ,IMG_0359. ,IMG_0361. ,IMG_0386. ,IMG_0401.
// /Users/dev/Documents/dev/de onde para onde/cp_test_files/origin

async function letsCopyBaby(){
    console.log(filesToCopy)
    if(!filesToCopy) {
        filesToCopy = await getList.getUsersList()
        console.log('Arquivos que serão procurados: ', filesToCopy) 
    }
    while(!originFolder){
        originFolder = await getPaths.getOriginAndDestinationPath().catch(err => console.log(err))
        console.log('origem retornada', originFolder)
    }
    while(!destinationFolder){
        destinationFolder = await getPaths.getOriginAndDestinationPath().catch(err => console.log(err))
        console.log('destination retornado', destinationFolder)
    }
    console.log('Vamos copiar!', originFolder)
    fs.promises.readdir(originFolder).then(filesList => {
        console.log('arquivos para copiar:', filesList, filesToCopy)
        // filesToCopy = filesList
        for (const file in filesToCopy) {
            console.log(file, filesToCopy[file])
            console.log('Copiando: ', originFolder + '/' + filesToCopy[file])
            console.log('Para: ', destinationFolder + '/' + filesToCopy[file])
            fs.copyFile(originFolder + '/' + filesToCopy[file], destinationFolder + '/' + filesToCopy[file], (err) => {
                console.log(err)
            })
        }
    })
}

letsCopyBaby()