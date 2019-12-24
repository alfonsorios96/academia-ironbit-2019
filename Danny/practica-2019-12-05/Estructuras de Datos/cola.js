class Block {
    constructor(value = 'Is Empty') {

        this.down = null;
        this.up = null;
        this.value = value;

    }

}
class Cola {
    constructor() {
        this.cola = [];
    }
    addCola(block) {

        if (this.cola.length === 0) {
            this.cola.push(block);
        } else {
            this.cola[(this.cola.length - 1)].up = block;
            block.down = this.cola[(this.cola.length - 1)];

            this.cola.push(block);
        }
    }

    extract() {
        let elementToOut = null;
        if (this.cola.length === 1) {
            return this.cola[0];
        } else {
            for (let i = 0; i < this.cola.length; i++) {
                if (this.cola[i].down === null) {
                    elementToOut = this.cola[i];
                    this.cola[i + 1].down === null;
                    this.cola.pop();
                    return elementToOut;
                }
            }
        }
    }
}