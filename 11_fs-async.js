// fs _ ფაილის სისტემის მოდული (ასინქრონული ვარიანტი)

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `result: ${first} \n${second}`, (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log('done');
        })
    })
})
console.log('next'); // პირველს ამას გამოიტანს რადგან ასინქრონულია