// filepath - ის მოდული

const path = require('path')

console.log(path.sep); // file path - ის გამყოფი სიმბოლო ( ჩვენს შემთხვევაში: / )

const filePath = path.join('/content', 'subfolder', 'text.txt') // path - ის მიღება
console.log(filePath);

const base = path.basename(filePath) // მთავარი ფაილის სახელი
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt') // აბსოლუტური path - ის მიღება
console.log(absolute);