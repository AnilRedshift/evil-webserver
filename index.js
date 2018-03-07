const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(301, {
    'Location': 'http://bit.ly/IqT6zt',
  });
  response.end();
});

const port = process.env.PORT || 3000;
server.listen(port, (e) => console.log(e? 'Oops': `Server running on port ${port}`));
