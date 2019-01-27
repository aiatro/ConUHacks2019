const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const tdg = require("./class/tdg.js");
const User = require('./User.js');
const QueueNode = require('./QueueNode.js');
const PriorityUserQueue = require('./PriorityQueue.js');



let client = {
    "name": 'ben',
    "age": 21,
    "email": "ant@concordia.ca",
    "password": "hardcopy",
    "score": 80.4,
    "rating": 9.2,
    "location": "Quebec",
}

let mentor = {
    "name": 'ben',
    "age": 21,
    "email": "ant@concordia.ca",
    "password": "hardcopy",
    "education": "phd",
    "rating": 9.2,
    "location": "Quebec",
}

const result = "Hello World"
var u1 = new User('a', 'a', 'a', 'a', 'Longueuil', 'a');
var u2 = new User('a', 'a', 'a', 'a', 'Saint-Lambert', 'a');
var u3 = new User('a', 'a', 'a', 'a', 'Montréal', 'a');
var n1 = new QueueNode(u1);
var n2 = new QueueNode(u2);
var nodes = [n2, n1];
var Q = new PriorityUserQueue(nodes);
Q.add(new QueueNode(u3));
//console.log('hello');
for (var i = 0; i < Q.nodes.length; i++) {
   // console.log(Q.nodes[i].priority);
   // console.log('hello');
}


// tool = new tdg();
// tool.registerMentor(mentor,function(msg){
//   console.log(msg);
// });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "front-end/build")));
// by default the index.js file is fetche
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(require('./routes'));


// app.use(bodyParser.json());
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

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