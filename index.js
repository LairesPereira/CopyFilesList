const fs  = import ('fs')
import getInput  from "./getList.js";
import  fileExtension  from "./getList.js";
import getPaths from './getPaths.js'

let originFolder
let destinationFolder
let filesToCopy


async function informationController(){
    while(!filesToCopy) {
        filesToCopy = await getInput.list().catch(e => console.log(e))
    }    
    // const format = await fileExtension.fileExtension()

    while(!originFolder){
        originFolder = await getPaths.getOriginPath()
    }
    while(!destinationFolder){
        destinationFolder = await getPaths.getDestinationPath().catch(err => console.log(err))
    }


   
    // console.log('Vamos copiar!', originFolder)
    // fs.promises.readdir(originFolder).then(filesList => {
    //     console.log('arquivos para copiar:', filesList, filesToCopy)
    //     // filesToCopy = filesList
    //     for (const file in filesToCopy) {
    //         console.log(file, filesToCopy[file])
    //         console.log('Copiando: ', originFolder + '/' + filesToCopy[file])
    //         console.log('Para: ', destinationFolder + '/' + filesToCopy[file])
    //         fs.copyFile(originFolder + '/' + filesToCopy[file], destinationFolder + '/' + filesToCopy[file], (err) => {
    //             console.log(err)
    //         })
    //     }
    // })
}

informationController()