const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const tdg = require("./class/tdg.js");
const User = require('./User.js');
const QueueNode = require('./QueueNode.js');
const PriorityUserQueue = require('./PriorityQueue.js');
const Chatkit = require('@pusher/chatkit-server');
const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:64dbd5a2-cdfa-4d34-94b0-3d22b5908fd7',
    key: '1383e484-ce14-48e0-a85c-cea0f4c2ae20:j4y437jiUusWwi//ReukeFsM4JWpFWlDMdwQ+nrC1rg=',
});

myController = new tdg();



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


/*app.use(require('./routes'));*/

// app.use(bodyParser.json());
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.post('/addmentor', (req, res) => {
    let data = req.body.data;
    console.log(data);
    let createdUser = null;

    chatkit
        .createUser({
            id: data.email,
            name: data.name,
        })
    res.setHeader('Content-Type', 'application/json');
    myController.registerMentor(data, function (msg) {
        res.send(JSON.stringify(msg));
    });

});
app.post('/addclient', (req, res) => {
    let data = req.body.data;
    console.log(data);
    let createdUser = null;

    chatkit
        .createUser({
            id: data.email,
            name: data.name,
        })
    res.setHeader('Content-Type', 'application/json');
    myController.registerClient(data, function (msg) {
        res.send(JSON.stringify(msg));
    });

});

app.post('/login', (req,res) =>{
    let data = req.body.data;
    console.log(data)
    res.setHeader('Content-Type', 'application/json');
    myController.login(data.email,data.password, function (msg) {
        res.send(JSON.stringify(msg));
    });

})

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

app.post('/createRoom', (req, res) => {
    let data = req.body.data;
    chatkit
        .createRoom({
            creatorId: data.roomid,
            isPrivate: true,
            name: data.roomname,
            userIds: ['Chatkit-dashboard', data.roomid],
        })
    res.json("room Created");
   });


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/views'})
})


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);