// os module _ ოპერაციული სისტემის მოდული

const os = require('os')

// გვაწვდის ოპერაციული სისტემის user - ის ინფორმაციას
const user = os.userInfo()
console.log(user);

// გვაწვდის ოპერაციული სისტემის მუშაობის დროს ( uptime )
console.log(`Opetating System has already loaded ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(), // ტიპი
    release: os.release(), // გამოშვების ვერსია
    totalMem: os.totalmem(), // ოპერატიული სისტემის მთლიანი მოცულობა
    freeMem: os.freemem(), // ოპერატიული სისტემის თავისუფალი მოცულობა
    host: os.hostname() // ოპერაციული სისტემის hostname ( ლეპტოპის სახელი ) 
}
console.log(currentOS);