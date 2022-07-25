import fs from 'fs';
import { promisify } from 'util'

let alunos;
const readFilePromise = promisify(fs.readFile)

// fs.readFile('./alunos.json',(erro,dados)=>{
//     if(erro){
//         console.error(erro);
//         return;
//     }
//     alunos = JSON.parse(dados);
//     console.log(alunos);
// });

readFilePromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados)
    console.log(alunos)
}).catch((erro)=> console.error(erro))