import getInput  from "./getList.js"
import getPaths from './getPaths.js'
import letsCopyBaby from './copyFiles.js'

let filesToCopy
let originFolder
let destinationFolder

async function informationController() {
    while(!filesToCopy) {
        filesToCopy = await getInput.list()
    }    
    while(!originFolder){
        originFolder = await getPaths.getOriginPath()
    }
    while(!destinationFolder){
        destinationFolder = await getPaths.getDestinationPath()
    }
    letsCopyBaby.letsCopyBaby(filesToCopy, originFolder, destinationFolder)
    
}

informationController()