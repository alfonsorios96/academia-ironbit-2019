class Block {
    constructor(value = 'Is Empty') {
        this.down = null;
        this.up = null;
        this.value = value;
    }
}

class Tail {
    constructor() {
        this.tail = [];
    }

    addTail(block) {
        if (this.tail.length === 0) {
            this.tail.push(block);
        } 
        else {
            this.tail[(this.tail.length - 1)].up = block;
            block.down = this.tail[(this.tail.length - 1)];
            this.tail.push(block);
        }
    }

    extract() {
        let elementToOut = null;

        if (this.tail.length === 1) {
            return this.tail[0];
        } 
        else {
            for (let i = 0; i < this.tail.length; i++) {
                if (this.tail[i].down === null) {
                    elementToOut = this.tail[i];
                    this.tail[i + 1].down === null;
                    this.tail.pop();
                    return elementToOut;
                }
            }
        }
    }
}

