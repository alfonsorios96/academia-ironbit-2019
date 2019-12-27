class Block {
    constructor(value = 'Is Empty') {
        this.down = null;
        this.up = null;
        this.value = value;
    }
}

class DoubleStack {
    constructor() {
        this.doubleStack = [];
    }

    addTail(block) {
        if (this.doubleStack.length === 0) {
            this.doubleStack.push(block);
        } 
        else {
            this.doubleStack[(this.doubleStack.length - 1)].up = block;
            block.down = this.doubleStack[(this.doubleStack.length - 1)];
            this.doubleStack.push(block);
        }
    }

    addstack(block) {
        if (this.doubleStack.length === 0) {
            this.doubleStack.push(block);
        } 
        else {
            this.doubleStack[(this.doubleStack.length - 1)].down = block;
            block.up = this.doubleStack[(this.doubleStack.length - 1)];
            this.doubleStack.push(block);
        }
    }

    extractElement(block) {
        for(let i = 0; i < this.doubleStack.length; i++) {
            if (this.doubleStack[i] === block.value) {
                this.doubleStack[i + 1].down = this.doubleStack[i-1];
                this.doubleStack[i - 1].up = this.doubleStack[i+1];
                this.doubleStack.splice(i, 1);
            }
        }
    }

    extractTail() {
        let elementToOut = null;
        if (this.doubleStack.length === 1) return this.doubleStack[0];

        else {
            for (let i = 0; i < this.doubleStack.length; i++) {
                if (this.doubleStack[i].down === null) {
                    elementToOut = this.doubleStack[i];
                    this.doubleStack[i + 1].down === null;
                    this.doubleStack.pop();
                    return elementToOut;
                }
            }
        }
    }

    extractStack() {
        let elementToOut = null;
        if (this.doubleStack.length === 1) return this.doubleStack[0];
        else {
            for (let i = 0; i < this.doubleStack.length; i++) {
                if (this.doubleStack[i].up === null) {
                    elementToOut = this.doubleStack[i];
                    this.doubleStack[i + 1].up === null;
                    this.doubleStack.shift();
                    return elementToOut;
                }
            }
        }
    }
}

