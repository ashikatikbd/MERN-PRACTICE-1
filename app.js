// const http = require("http");
// const fs = require("fs");
// const port = 8080;
// const hostname = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   const handleReadFile = (fileLocation, statusCode) => {
//     fs.readFile(fileLocation, (err, data) => {
//       res.writeHead(statusCode, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   };

//   if (req.url === "/") {
//     handleReadFile("./views/index.html", 200);
//   } else if (req.url === "/about") {
//     handleReadFile("./views/about.html", 200);
//   } else if (req.url === "/service") {
//     handleReadFile("./views/service.html", 200);
//   } else if (req.url === "/contact") {
//     handleReadFile("./views/contact.html", 200);
//   } else {
//     handleReadFile("./views/error.html", 404);
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server is running ......  http://${hostname}:${port}`);
// });


const http = require('http');
const app = express()

app.get('/', (req,res) => {
  res.send('Welcome to our server....')
})


app.listen(3030, () => {
  console.log(`server is running ...... http://localhost:3030`);
})