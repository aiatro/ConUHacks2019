const express = require('express');
const User = require('./User');
const QueueNode = require('./QueueNode');
const PriorityUserQueue = require('./PriorityQueue');
const GeoData = require('./GeoData');

const app = express();

    app.get('/api/helloworld', (req, res) => {
    const result = "Hello World"
    var u1 = new User('a','a','a','a','Longueuil','a');
    var u2 = new User('a','a','a','a','Saint-Lambert','a');
    var u3 = new User('a','a','a','a','Montréal','a');
    var n1 = new QueueNode(u1);
    var n2 = new QueueNode(u2);
    var nodes = [n2,n1];
    var Q = new PriorityUserQueue(nodes);
    Q.add(new QueueNode(u3));
    setTimeout(function(){ res.json(Q.nodes) }, 2000);
    
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);