const express = require('express')
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();

// Redis
const HOST_REDIS = 'redis';
const PORT_REDIS = 6379;

const client = redis.createClient({
    url: `redis://${HOST_REDIS}:${PORT_REDIS}`
});

client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

client.on('connect', () => {
    console.log('Redis Connected ...');
});

(async () => {
    await client.connect();
})();



// Mongo
const user = 'root';
const password = 'example';
const port = 27017;
const host = 'mongo';

const URI = `mongodb://${user}:${password}@${host}:${port}`;

mongoose.connect(URI)
    .then(() => console.log('Mongo Connected!'))
    .catch((err) => console.log(err));

// Route
app.get('/', (req, res) => {
    res.send('<h1>Hello Seif 🚀</h1>');
});


// Server
app.listen(4000, () => {
    console.log('server running on port 4000');
});
