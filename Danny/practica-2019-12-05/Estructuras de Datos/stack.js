class Block {
    constructor(value = 'Is Empty') {

        this.down = null;
        this.up = null;
        this.value = value;

    }

}
class Stack {
    constructor() {
        this.stack = [];
    }
    addstack(block) {

        if (this.stack.length === 0) {
            this.stack.push(block);
        } else {
            this.stack[(this.stack.length - 1)].down = block;
            block.up = this.stack[(this.stack.length - 1)];

            this.stack.push(block);
        }
    }

    extractStack() {
        let elementToOut = null;
        if (this.stack.length === 1) {
            return this.stack[0];
        } else {
            for (let i = 0; i < this.stack.length; i++) {
                if (this.stack[i].up === null) {
                    elementToOut = this.stack[i];
                    this.stack[i + 1].up === null;
                    this.stack.shift();
                    return elementToOut;
                }
            }
        }
    }
}