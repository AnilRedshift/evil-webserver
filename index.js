const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(301, {
    'Location': 'http://bit.ly/IqT6zt',
  });
  response.end();
});

server.listen(3000, (e) => console.log(e? 'Oops': 'Server running on port 3000'));
