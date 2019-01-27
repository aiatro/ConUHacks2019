const express = require('express');
const User = require('./User');
const QueueNode = require('./QueueNode');
const PriorityUserQueue = require('./PriorityQueue');

const app = express();

app.get('/api/helloworld', (req, res) => {
    const result = "Hello World"
    var u1 = new User('a','a','a','a','a','a');
    var n1 = new QueueNode(u1, 1);
    var n2 = new QueueNode(u1,12);
    var nodes = [n1,n2];
    var Q = new PriorityUserQueue(nodes);
    Q.add(new QueueNode(u1,19));
    res.json(Q.nodes);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);