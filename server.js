const http = require('http');

const server = http.createServer(
    (req, res) => {
        console.log('request was made: ');
    }
)

server.listen(3000, 'localhost',() => {
    console.log('now listening on port 3000');
});