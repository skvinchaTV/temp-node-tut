/* npm, packages, package.json, libraries */

// npm _ გლობალური კომანდი მოყვება node
// npm --version (or npm --v) _ ვერსიის გაგება

// local dependency _ გამოიყენება მხოლოდ გარკვეულ პროექტებში
// npm i <packageName> _ ფექიჯის გადმოწერა (ლოკალური)

// global dependency _ გამოიყენება ნებისმიერ პროექტში
// npm i -g <packageName> _ ფექიჯის გადმოწერა (გლობალური)
// sudo npm i -g <packageName> _ mac - ისთვის

// package.json _ ინახავს მნიშვნელოვან ინფორმაციას ჩვენი პროექტის ან ფექიჯის შესახებ
// ხელით მიდგომა (ფექიჯის შექმნა root - ში, თვისებების შექმნა და ა.შ)
// npm init (ნაბიჯ-ნაბიჯ, და შემდეგ დააჭერ enter - ს რო დასკიპო)
// npm init -y (ყველაფერი default - ზე)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);