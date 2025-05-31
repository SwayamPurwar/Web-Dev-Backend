const http = require('http');


server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url == '/'){
        res.end("The Home Page")
    }else if((req.url == '/about')){
        res.end("The About Page")
    }else if((req.url == '/profile')){
        res.end("The Profile Page")
    }else {
        res.end("404 Page Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")

})
