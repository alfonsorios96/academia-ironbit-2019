class Node {
    constructor (data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
class DoubleLinkedList {
    constructor(){
        this.list = new Set();
        this.currentNode = null;
    }
    add(data, prev = null, next = null) {
        const node = new Node(data);
        node.prev = prev;
        node.next = next;
        if (prev !== null ){
            prev.next = node;
        }
        if (next !== null){
            next.prev = node;
        }
        this.currentNode = this.currentNode === null ? node : this.currentNode;
        this.list.add(node);
    }
    prev(){
        this.currentNode = this.currentNode.prev !== null ? this.currentNode.prev : this.currentNode;
    }
    next(){
        this.currentNode = this.currentNode.next !== null ? this.currentNode.next : this.currentNode;
    }
    remove( data  ){
        let arrList = [...this.list];
        let elemNode = arrList.filter((i) => {
            if( i.data === data){
                return i;
            }
        });
        let prev = elemNode.prev;
        let next = elemNode.next;
        if( this.list.has(elemNode.data)){
            return 'Error, this  data is not in the list';
        }
        else {
            if( elemNode.prev === null  || elemNode.next === null){
                this.list.delete(elemNode);
            }else if ( elemNode.prev !== null && elemNode.next !== null){
                prev.next = next;
                next.prev = prev;
                this.list.delete(elemNode);
            }
        } 
    }
}