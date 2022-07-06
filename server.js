const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (req, res) => {
        console.log(req.url);
        res.setHeader('Content-Type', 'text/html');

        let path = './views/';
        switch(req.url){
            case '/':
                path += 'index.html';
                break;
            case '/about-us':
                path += 'about.html';
                break;
            default:
                path += '404.html';
        }

        fs.readFile(path, (err, data) => {
            if(err){
                console.log(err);
                res.end();
            }
            res.end(data);
        });
    }
)

server.listen(3000, 'localhost',() => {
    console.log('now listening on port 3000');
});