import { copyFile } from 'node:fs/promises';

const letsCopyBaby = async function (filesToCopy, origin, destination) {
    if(origin[origin.length - 1] != '/') {
        origin = origin.concat('/')
    }
    if(destination[destination.length - 1] != '/') {
        destination = destination.concat('/')
    }
    for (const file in filesToCopy) {
        try {
            await copyFile(`${origin}${filesToCopy[file]}.CR3`, `${destination}${filesToCopy[file]}.CR3`);
          } catch (error){
            console.error(error);
        }
    }
    process.exit()
}   

export default {
    letsCopyBaby: letsCopyBaby
}