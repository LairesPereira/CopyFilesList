const fs  = import ('fs')
import getInput  from "./getList.js";
import  fileExtension  from "./getList.js";
import getPaths from './getPaths.js'

let originFolder
let destinationFolder
let filesToCopy


async function letsCopyBaby(){
    while(!filesToCopy) {
        filesToCopy = await getInput.list().catch(e => console.log(e))
        console.log('Arquivos que serão procurados: ', filesToCopy) 
    }    
    
    const format = await fileExtension.fileExtension()

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