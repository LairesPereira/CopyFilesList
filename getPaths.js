const constants  = import('buffer')
const fs = import('fs')
import rl from './readUserInput.js'

// /Users/dev/Downloads/XV Anos Kethlyn (Kelly) 
// IMG_9246. ,IMG_9244. ,IMG_9249. ,IMG_9264. ,IMG_9272. ,IMG_9384. ,IMG_9394. ,IMG_9406. ,IMG_9417. ,IMG_9439. ,IMG_9448. ,IMG_9447. ,IMG_9453. ,IMG_9455. ,IMG_9461. ,IMG_9488. ,IMG_9506. ,IMG_9511. ,IMG_9522. ,IMG_9525. ,IMG_9535. ,IMG_9566. ,IMG_9609. ,IMG_9619. ,IMG_9625. ,IMG_9630. ,IMG_9629. ,IMG_9663. ,IMG_9669. ,IMG_9675. ,IMG_9683. ,IMG_9689. ,IMG_9693. ,IMG_9698. ,IMG_9700. ,IMG_9701. ,IMG_9711. ,IMG_9708. ,IMG_9716. ,IMG_9719. ,IMG_9724. ,IMG_9726. ,IMG_9735. ,IMG_9736. ,IMG_9741. ,IMG_9761. ,IMG_9758. ,IMG_9764. ,IMG_9770. ,IMG_9773. ,IMG_9776. ,IMG_9779. ,IMG_9795. ,IMG_9797. ,IMG_9805. ,IMG_9789. ,IMG_9824. ,IMG_9838. ,IMG_9844. ,IMG_9855. ,IMG_9853. ,IMG_9865. ,IMG_9871. ,IMG_9891. ,IMG_9959.
// IMG_2465. ,IMG_2467. ,IMG_2399. ,IMG_2473. ,IMG_2401. ,IMG_2475. ,IMG_2417. ,IMG_2480. ,IMG_2424. ,IMG_2489. ,IMG_2433. ,IMG_2491. ,IMG_2452. ,IMG_2492. ,IMG_2460. ,IMG_2486. ,IMG_2420. ,IMG_2505. ,IMG_2428. ,IMG_2515. ,IMG_2439. ,IMG_2444. ,IMG_2451. ,IMG_2454. ,IMG_2459.
// /Users/dev/Downloads/Ensaio Família Raul

// where users input will be stored
let originPath = []
let destinationPath = []

// shows an error messagem if users path is invalid
// and call once again the same function.
const pathDoesNotExists = async function (nonexistentPath, emitter) {
    // Emitter refers where is the error.
    console.log(`O caminho de ${emitter} "${nonexistentPath}" não existe`)
}

// Where we collect users inputs.
const getOriginAndDestinationPath = async function () {
    return new Promise((resolve, rejects) => { 
    // originPath will always be zero until.
    // users give a existent path.
    if(originPath.length == 0){
        // collectin orgin path.
        // and confirming if it exists.
        rl.question('Digite o caminho dos arquivos a serem copiados', pathInput => {
            fs.access(pathInput, constants.F_OK, (err) => {
                if(err){ 
                    // handdle with nonexisting paths.
                    rejects('PATH ERROR')
                    pathDoesNotExists(pathInput, 'destino')
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