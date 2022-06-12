const http = require("http");

let data = undefined;
const server = http.createServer((req,res)=>{
    const url = req.url;

    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<h1>Enter Message:</h1>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"></br>')
        res.write('<button type="submit">Send</button></form>')
        res.write(`<p>Data: ${data} </p>`)
        res.write('</html>');
        //Return function.
        return res.end();
    }

    if (url === '/message' && req.method === 'POST'){
        const body = [];
        //Get message and store it in data.
        req.on('data', (chunk)=>{
           body.push(chunk);
        });
        //After the request finish parsing the data then the 'end' event is fired.
        req.on('end', () => {
           data = Buffer.concat(body).toString().split('=',1)[1];
        });
    }
    //Redirecting to home page.
    res.statusCode = 302;
    res.setHeader('Location','/');
    res.end();

});
server.listen(3000);
