import { writeFile, readFile } from 'node:fs';
import { copyFile } from 'node:fs/promises';
import fs from 'fs'

const teste = async function() {
  fs.promises.readdir(`/Users/Dev/Documents/origin/`).then(filesList => {
    console.log(filesList)
    for (const file in filesList) {
      console.log(filesList[file])
        fs.copyFile(`/Users/Dev/Documents/origin/IMG_2026.CR3`, `/Users/Dev/Documents/destination/IMG_2026.CR3`, (err) => {
        console.log(err)
      })
  }})


      
  }

  teste()
//IMG_2026 IMG_2027 IMG_2028 IMG_2029 IMG_2030 IMG_2031