// http handle the node server's request and response.
const http = require('http');
const fs = require('fs');
const path = require('path');

const data = require('./data');

// ===============================> Input Parameter through add and remove file <============================


// // Take an input 
// const input = process.argv

// // console.log(input)
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// } else {
//     console.log("Invalid Input");
// }


const dirPath = path.join(__dirname, 'files')

for(let i=0; i<5;i++){
    if(i==0){
        fs.writeFileSync(`${dirPath}/new_file.txt`, `This is File No ${i+1}`)
    }else{
        fs.writeFileSync(`${dirPath}/new_file(${i+1}).txt`, `This is File No ${i + 1}`)

    }
}

console.log(dirPath);

// Create Server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(data));
    res.end()
}).listen(5000);