const _ = require('lodash');
class PriorityUserQueue{
     
    constructor(nodes){
        if(nodes == null){
            this.nodes = [];
        }
        else{
            this.nodes=nodes;
            this.nodes = _.sortBy(this.nodes, ['priority'], ['asc']);
        }
    }

    add(node){
        this.nodes.push(node);
        this.nodes = _.sortBy(this.nodes, ['priority'], ['asc']);
    }

}
module.exports = PriorityUserQueue;