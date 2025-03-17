const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');

fs.readFile('HelloWorld.txt', 'utf-8',function(err,data){
    if (err){
        console.error(err)
        return
    }
    console.log(data);
});



fs.writeFile('ByeWorld.txt','Bye World!', function (err) {
    if (err){
        console.log(err);
    }
    else {
        console.log('Write operation complete');
    }
});


module.exports = {readFile,writeFile}


console.log(readFile)
