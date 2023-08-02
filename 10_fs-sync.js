// fs _ ფაილის სისტემის მოდული (სინქრონული ვარიანტი)

const { readFileSync, writeFileSync } = require('fs')

// ფაილებიდან წაკითხვა
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first + ',', second);

// ფაილში რაიმეს ჩაწერა ( თუ ფაილი არ არსობობს, მაშინ ფაილს შექმნის და შემდეგ ჩაწერს )
// {flag: 'a'} _ იმ შემთხვევისთვის თუ გვინდა რომ კოდის ორჯერ გაშვებისას შედეგი განმეორდეს
writeFileSync('./content/result-sync.txt', `result: ${first}`/*, {flag: 'a'} */)