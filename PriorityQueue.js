class PriorityUserQueue{
     
    constructor(nodes){
        if(nodes == null){
            this.nodes = [];
        }
        else{
            this.nodes=nodes;
        }
    }

    add(node){
        this.nodes.push(node);
    }

}
module.exports = PriorityUserQueue;