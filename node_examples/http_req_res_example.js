const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    let data = undefined;
    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<h1>Enter Message:</h1>');
        res.write('<form action="/message" method="POST"><input type="text"></br>')
        res.write('<input type="submit"></form>')
        res.write('</html>');
        //Return function.
        return res.end();
    }

    if (url === '/message' && req.method === 'POST'){
        //Get message and store it in data.
        console.log(req);

    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>Message Recaived</html>");
    res.end();
});
server.listen(3000);
