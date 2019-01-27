const GeoData = require('./GeoData.js');
const User = require('./User.js');

class QueueNode{
    
    constructor(user,priority){
        this.user = user;
        this.priority = priority;
        let temp = this;
        //console.log(temp.priority)
        new GeoData().getPriority(user.city, function (callback){
        temp.priority = callback;
        console.log(callback)
        });
    
       
    }
}
module.exports = QueueNode;