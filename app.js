const express = require('express');
const app = express();

app.get('/', (req, resp) => {
  resp.send('sup, earth');
});

const users = ['cust1', 'cust2', 'cust3'];

app.get('/api/users', (req, resp) => {
  resp.send(JSON.stringify(users));
});

app.get('/api/users/:id', (req, resp) => {
  resp.send(JSON.stringify(users[req.params.id - 1]));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`))
