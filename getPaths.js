const constants  = import('buffer')
import fs from 'fs'
import rl from './readUserInput.js'

// where users input will be stored
let originPath = []
let destinationPath = []

// shows an error messagem if users path is invalid
// and call once again the same function.

// Where we collect users inputs.
const getOriginAndDestinationPath = async function () {
    return new Promise((resolve, rejects) => { 
    // originPath will always be zero until.
    // users give a existent path.
    if(originPath.length == 0){
        // collectin orgin path.
        // and confirming if it exists.
        console.log('Insert the orgin folder: ')
        rl.on('line', pathInput => {
            fs.access(pathInput, constants.F_OK, (err) => {
                if(err){ 
                    // handdle with nonexisting paths.
                    rejects('Path does not exists')
                    // pathDoesNotExists(pathInput, 'destino')
                } else {
                    // now we call the function once again
                    // and the originPath lenght will be 1.
                    console.log('O caminho de origem foi aceito!')
                    originPath = pathInput
                    resolve(originPath)
                    // rl.close()
                }
            })
        });
    } else {
        // getting destination folder.
        rl.question('Digite o caminho de destino dos arquivos', pathInput => {
            // Verify if the path does exist.
            fs.access(pathInput, constants.F_OK, (err) => {
                if(err){ 
                    // handdle nonexisting path.
                    rejects('PATH ERROR')
                    pathDoesNotExists(pathInput, 'destino')
                } else {
                    // store destination and stop.
                    console.log('O caminho de destino foi aceito!')
                    destinationPath = pathInput
                    console.log('Closing the gates!')
                    console.log(originPath, destinationPath)
                    rl.close()
                    resolve(destinationPath)
                }
            })
        });
    }
    })
} 

export default {
    getOriginAndDestinationPath: getOriginAndDestinationPath
}