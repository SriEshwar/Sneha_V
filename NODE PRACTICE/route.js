const fs = require('fs')

const reqHandler = (req,res) => {
    //console.log(req)
    //process.exit() - exit the process
    //console.log(req.url) - gives the url of request
    //console.log(req.method) 
    //console.log(req.headers)

    const url = req.url
    const method = req.method
    if(url==='/'){
     res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>form</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
    res.write('</html>')
    return res.end()
    }

    if(url==='/message' && method== 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log('chunk')
            body.push(chunk)
            console.log(chunk)

        })

       return req.on('end',() => {
            console.log("End event received")
            const parsedBody = Buffer.concat(body).toString()
            //console.log(parsedBody)
            const message = parsedBody.split('=')
            fs.writeFile('new_file.txt',message[1],(err)=> {
                console.log("filewrite completed")
                res.setHeader('Location','/')
                res.statusCode = 302
                return res.end() 
            })
            
            
        })

        

    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>welcome</title></head>')
    res.write('<body><h1>hello welcome to the page</h1></body>')
    res.write('</html>')
    res.end()
}

// module.exports = reqHandler
//to export multiple functions
// module.exports = {
//     handler : reqHandler,
//     someText : "text"
// }


