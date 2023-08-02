// http მოდული

/* 
    სერვერის შექმნა
    req _ request (მოთხოვნა - ობიექტი)
    res _ responce (პასუხი - ობიექტი)
*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(res);
    switch (req.url) {
        case '/': res.end("Hello from our home page")
            break;
        case '/about': res.end('Here is our short history')
            break;
        default: res.end(`
                            <h1>Oops!</h1>
                            <p>We can't seem to find the page you are looking for</p>
                            <a href="/">back home</a>
                        `)
            break;
    }
})

server.listen(5000) // პორტის მიღება