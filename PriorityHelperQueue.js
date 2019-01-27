class PriorityHelperQueue{
     
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
    
    removeFromFront(){
        return this.nodes.shift();
    }

}
module.exports = PriorityHelperQueue;