const express = require('express');

const app = express();

app.use((req,res,next) => {
  console.log("Middleware #1");
  next();
})
app.use((req,res,next)=>{
  console.log("Middleware #2");
  res.send("<h1>Hello from express</h1>")
});

const server = http.createServer(app);
server.listen(3000,()=>{console.log("Server listenning in port: " + 3000)});
