const GeoData = require('./GeoData.js');
const User = require('./User.js');

class QueueNode{
    
<<<<<<< Updated upstream
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
=======
    constructor(User) {
        this.GeoData = new GeoData();
        var info = {};
    }


   getPriority(callback){
       this.GeoData.getPriority(User.city, function (msg) {
           info.push(msg);
           callback(msg);
       });
   }
>>>>>>> Stashed changes
}
module.exports = QueueNode;